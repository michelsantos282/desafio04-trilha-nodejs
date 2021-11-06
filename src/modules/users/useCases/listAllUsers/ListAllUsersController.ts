import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    // Não sei porque esta linha está dando erro, porém está funcionando
    const users = this.listAllUsersUseCase.execute({ user_id });

    return response.json(users);
  }
}

export { ListAllUsersController };
