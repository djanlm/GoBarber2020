import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const cacheKey = `provider-appointments:${provider_id}:${year}-${month}-${day}`;

    // procura por appointments no cache
    let appointments = await this.cacheProvider.recover<Appointment[]>(
      cacheKey,
    );

    // let appointments = null;
    // caso o cache esteja vazio, faz a busca no repositorio
    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromProvider(
        {
          provider_id,
          year,
          month,
          day,
        },
      );

      await this.cacheProvider.save(cacheKey, classToClass(appointments)); // serialização, o classtoclass aqui serve pra remover o campo password e retornar o campo avatar
    }

    // await this.cacheProvider.save('asd', 'asd');

    return appointments;
  }
}

export default ListProviderAppointmentsService;
