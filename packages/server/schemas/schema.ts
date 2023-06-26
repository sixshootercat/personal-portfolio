// Then import schema types from any plugins that might expose them
import { technologiesType } from './technologies';
import { experienceType } from './experience';
import { aboutMeType } from './aboutMe';

export const schemaTypes = [experienceType, aboutMeType, technologiesType];
