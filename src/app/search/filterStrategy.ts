import {Injectable} from 'angular2/core';
import {Product} from '../providers/product';
import {StrategyResults} from './strategyResults';

@Injectable()
export class FilterStrategy {

    public static QUERY_PREFIX = {
        NAME: '',
        BRAND: '+',
        CODE: '#',
        LEYEND: '/',
        CONSERVATION: '^',
        CONTAINS: '_',
        FORMAT: '@'
    };

    filter(data: Product[], query: string): StrategyResults {
        //console.log(data, filter);
        query = query.toUpperCase();
        var parts: string[];
        var quantity: number = -1;
        var error = '';


        //si empieza por número y coma, indica la cantidad... pero no forma parte del filtro
        var match = query.match(/^\d+(?!:,)/);
        if (match != null) {
            quantity = parseInt(match[0], 10);
            query = query.replace(/^\d+,\s*/, '');
        }

        parts = query.split(' ').filter(function(p) { return p !== ''; });


        var query_startsWith = function(val) {
            return function(item) {
                return item.__name.startsWith(val);
            };
        };

        var query_wordStartsWith = function(val) {
            return function(item) {
                return item.__name.indexOf(' ' + val) >= 0;
            };
        };

        var query_contains = function(field, val) {
            return function(item) {
                return item[field].indexOf(val) >= 0;
            };
        };

        var query_brand = function(val) {
            return function(item) {
                return item.__brand.indexOf(val) >= 0;
            };
        };

        var query_codigo = function(val) {
            return function(item) {
                return (item.__code + '').startsWith(val);
            };
        };

        var idx = 0;
        var datos_filtrados = parts.length ? data : [];
        var part;
        var nombre_count = 0;
        while (part = parts[idx]) {
            var fn;

            switch (part.charAt(0)) {
                case '*':
                    fn = query_contains('__name', part.substr(1));
                    break;
                case FilterStrategy.QUERY_PREFIX.BRAND:
                    fn = query_contains('__brand', part.substr(1));
                    break;
                case '#':
                    fn = query_contains('__code', part.substr(1));
                    break;
                case '/':
                    fn = query_contains('__leyend', part.substr(1));
                    break;
                case '^':
                    fn = query_contains('__conservation', part.substr(1));
                    break;
                case '_':
                    fn = query_contains('__contains', part.substr(1));
                    break;
                case '@':
                    fn = query_contains('__format', part.substr(1));
                    break;
                default:
                    fn = nombre_count ? query_wordStartsWith(part) : query_startsWith(part);
                    nombre_count += 1;
            }
            idx++;

            datos_filtrados = datos_filtrados.filter(fn);
        }

        return {
            quantity: quantity,
            products : datos_filtrados,
            error: error
        };
    }
}
