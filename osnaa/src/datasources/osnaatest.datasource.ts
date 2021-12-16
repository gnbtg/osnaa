import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'osnaatest',
  connector: 'mssql',
  url: '',
  host: '49.0.170.179',
  port: 1433,
  user: 'sa',
  password: 'Tumeepower123#',
  database: 'db_ams'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OsnaatestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'osnaatest';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.osnaatest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
