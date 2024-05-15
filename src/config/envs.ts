import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PATH_PUBLIC: get('PATH_PUBLIC').default('public').asString(),
}