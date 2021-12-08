import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {GeoWebUsers, GeoWebUsersRelations} from '../models';

export class GeoWebUsersRepository extends DefaultCrudRepository<
  GeoWebUsers,
  typeof GeoWebUsers.prototype.id,
  GeoWebUsersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(GeoWebUsers, dataSource);
  }
}
