import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {GeoWebUsers} from '../models';
import {GeoWebUsersRepository} from '../repositories';

export class UsersController {
  constructor(
    @repository(GeoWebUsersRepository)
    public geoWebUsersRepository : GeoWebUsersRepository,
  ) {}

  @post('/y')
  @response(200, {
    description: 'GeoWebUsers model instance',
    content: {'application/json': {schema: getModelSchemaRef(GeoWebUsers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GeoWebUsers, {
            title: 'NewGeoWebUsers',
            exclude: ['id'],
          }),
        },
      },
    })
    geoWebUsers: Omit<GeoWebUsers, 'id'>,
  ): Promise<GeoWebUsers> {
    return this.geoWebUsersRepository.create(geoWebUsers);
  }

  @get('/y/count')
  @response(200, {
    description: 'GeoWebUsers model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GeoWebUsers) where?: Where<GeoWebUsers>,
  ): Promise<Count> {
    return this.geoWebUsersRepository.count(where);
  }

  @get('/y')
  @response(200, {
    description: 'Array of GeoWebUsers model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GeoWebUsers, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GeoWebUsers) filter?: Filter<GeoWebUsers>,
  ): Promise<GeoWebUsers[]> {
    return this.geoWebUsersRepository.find(filter);
  }

  @patch('/y')
  @response(200, {
    description: 'GeoWebUsers PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GeoWebUsers, {partial: true}),
        },
      },
    })
    geoWebUsers: GeoWebUsers,
    @param.where(GeoWebUsers) where?: Where<GeoWebUsers>,
  ): Promise<Count> {
    return this.geoWebUsersRepository.updateAll(geoWebUsers, where);
  }

  @get('/y/{id}')
  @response(200, {
    description: 'GeoWebUsers model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GeoWebUsers, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GeoWebUsers, {exclude: 'where'}) filter?: FilterExcludingWhere<GeoWebUsers>
  ): Promise<GeoWebUsers> {
    return this.geoWebUsersRepository.findById(id, filter);
  }

  @patch('/y/{id}')
  @response(204, {
    description: 'GeoWebUsers PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GeoWebUsers, {partial: true}),
        },
      },
    })
    geoWebUsers: GeoWebUsers,
  ): Promise<void> {
    await this.geoWebUsersRepository.updateById(id, geoWebUsers);
  }

  @put('/y/{id}')
  @response(204, {
    description: 'GeoWebUsers PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() geoWebUsers: GeoWebUsers,
  ): Promise<void> {
    await this.geoWebUsersRepository.replaceById(id, geoWebUsers);
  }

  @del('/y/{id}')
  @response(204, {
    description: 'GeoWebUsers DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.geoWebUsersRepository.deleteById(id);
  }
}
