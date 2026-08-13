import type { Level } from '../types'
import { module1HelloGreetings } from './m1-hello-greetings'
import { module2PersonalInformation } from './m2-personal-information'
import { module3ThingsAndPeople } from './m3-things-and-people'
import { module4FamilyPossessives } from './m4-family-possessives'
import { module5Routines } from './m5-routines'
import { module6Time } from './m6-time'
import { module7Home } from './m7-home'
import { module8Food } from './m8-food'
import { module9Ability } from './m9-ability'
import { module10PresentContinuous } from './m10-present-continuous'
import { module11Places } from './m11-places'
import { module12PastSimple } from './m12-past-simple'
import { module13Future } from './m13-future'
import { module14Shopping } from './m14-shopping'
import { module15ReviewExam } from './m15-review-exam'

export const a1Level: Level = {
  id: 'a1',
  name: 'A1',
  title: 'Breakthrough',
  description: 'Curso completo de inglés desde cero hasta nivel A1 del MCER.',
  status: 'available',
  modules: [
    module1HelloGreetings,
    module2PersonalInformation,
    module3ThingsAndPeople,
    module4FamilyPossessives,
    module5Routines,
    module6Time,
    module7Home,
    module8Food,
    module9Ability,
    module10PresentContinuous,
    module11Places,
    module12PastSimple,
    module13Future,
    module14Shopping,
    module15ReviewExam,
  ],
}