import { DefineAbilityFor, projectSchema } from '@saas/auth'

const ability = DefineAbilityFor({ role: 'MEMBER', id: 'user-id' })
const project = projectSchema.parse({ id: 'project-id', ownerId: 'user2-id' })

const userCanDeleteSomeoneElse = ability.can('delete', project)
const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanDeleteSomeoneElse)
console.log(userCannotDeleteSomeoneElse)
