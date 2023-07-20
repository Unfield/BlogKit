import { dev } from '$app/environment';

import SettingJSON from '../blogkit-config.json';

export const title = SettingJSON.title;
export const description = SettingJSON.description;
export const url = dev ? 'http://localhost:5173' : SettingJSON.url;
