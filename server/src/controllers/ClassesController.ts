import { Request, Response } from 'express'

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        if(!filters.week_day || !filters.subject || filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }
    }
// 1:58:00
    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            const insertdUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
    
            const user_id = insertdUsersIds[0];
    
            const insertdClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
    
            const class_id = insertdClassesIds[0];
    
            const classSchedule = schedule.map((scheduleItem: ScheduleItem)=>{
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            })
    
            await trx('class_schedule').insert(classSchedule);
    
            await trx.commit();
    
            return response.status(201).send();
        } catch (err){
            await trx.rollback();
            response.status(400).json({
                error: 'Unexcected error while creating class'
            })
        }
    
        return response.send();
    }
}