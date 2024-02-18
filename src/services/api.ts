import {
    ApiResponse,
    ApisauceConfig,
    ApisauceInstance,
    create,
} from 'apisauce';

export default class _RestApiService {
    api: ApisauceInstance;

    static baseURL = '';

    static defaultHeaders = {
        headers: {
            'content-type': 'application/json',
        },
    };

    constructor(baseURL: string) {
        _RestApiService.baseURL = baseURL;
        this.api = create({
            baseURL,
            ..._RestApiService.defaultHeaders,
        });
    }

    async get<T, R>(
        url: string,
        data?: T,
        config?: Partial<ApisauceConfig>,
    ): Promise<ApiResponse<R>> {
        return this.api.get(url, data || {}, config);
    }

    async post<T, R>(
        url: string,
        data?: T,
        config?: Partial<ApisauceConfig>,
    ): Promise<ApiResponse<R>> {
        return this.api.post(url, data, config);
    }

    async put<T, R>(
        url: string,
        data?: T,
        config?: Partial<ApisauceConfig>,
    ): Promise<ApiResponse<R>> {
        return this.api.put(url, data, config);
    }

    async patch<T, R>(
        url: string,
        data?: T,
        config?: Partial<ApisauceConfig>,
    ): Promise<ApiResponse<R>> {
        return this.api.patch(url, data, config);
    }

    async delete<T, R>(
        url: string,
        data?: T,
        config?: Partial<ApisauceConfig>,
    ): Promise<ApiResponse<R>> {
        return this.api.delete(url, data || {}, config);
    }
}
