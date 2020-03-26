import * as Router from 'koa-joi-router'
import { createHelper } from '../helpers/business'
import { Business } from '../../db/models/Business'

export const router = Router()

router.route({
  method: 'post',
  path: '/',
  ...createHelper.validate,
  handler: [async (ctx) => {
    ctx.body = {
      
    }
  }]
})