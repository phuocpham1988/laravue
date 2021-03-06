import {http, httpFile} from './http_service';

export function createCategory(data) {
    return httpFile().post('/categories', data);
}

export function loadCategories() {
    return http().get('/categories');
}

export function deleteCategory(id) {
    return http().delete(`categories/${id}`);
}