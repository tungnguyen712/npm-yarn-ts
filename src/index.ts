import * as _ from 'lodash';
import type { Dictionary } from 'lodash';
import yaml = require('js-yaml');

export function render(tpl: string, data: Dictionary<string>): string {
  return _.template(tpl)(data); // ref:GHSA-35jh-r3h4-6jhm
}

export const cfg = yaml.load('a: 1'); // ref:GHSA-8j8c-7jfh-h6hx
