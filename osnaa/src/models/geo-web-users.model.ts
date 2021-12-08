import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'geo', table: 'geo_web_users'}}})
export class GeoWebUsers extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'last_name', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastName?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'first_name', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstName?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'user_name', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  userName?: string;

  @property({
    type: 'string',
    length: 1000,
    mysql: {columnName: 'password', dataType: 'varchar', dataLength: 1000, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  password?: string;

  @property({
    type: 'string',
    required: true,
    length: 255,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  email: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'user_type', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  userType?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'phone_number', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  phoneNumber?: number;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'oauth_provider', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oauthProvider?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'oauth_uid', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  oauthUid?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'gender', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  gender?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'locale', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  locale?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'picture_url', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pictureUrl?: string;

  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'profile_url', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  profileUrl?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'active_flg', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  activeFlg?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'insert_user', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  insertUser?: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'insert_date', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  insertDate: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'modified_user', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  modifiedUser?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'modified_date', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  modifiedDate?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'delete_user', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  deleteUser?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'delete_date', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  deleteDate?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'delete_flg', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  deleteFlg?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GeoWebUsers>) {
    super(data);
  }
}

export interface GeoWebUsersRelations {
  // describe navigational properties here
}

export type GeoWebUsersWithRelations = GeoWebUsers & GeoWebUsersRelations;
