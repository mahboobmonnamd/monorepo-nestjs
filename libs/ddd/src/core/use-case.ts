/**
 * If any action which is going to be the root point of a scenario implement this interface
 */
export interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}
