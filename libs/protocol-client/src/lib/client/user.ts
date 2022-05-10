import { UserUpdateInput, UserWhereUniqueInput } from '../protocol-types';
import { BaseClient } from './base';

export class User extends BaseClient {
  public async get(id: number) {
    const jobRun = await this.sdk.getUser({ where: { id } });
    return jobRun.result;
  }

  public async update(data: UserUpdateInput, where: UserWhereUniqueInput) {
    const jobRun = await this.sdk.updateUser({ where, data });
    return jobRun.updateUser;
  }
}
