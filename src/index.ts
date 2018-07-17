const replaceString = require('replace-string');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** A convenient way to replace string
 * @see {@link https://www.npmjs.com/package/replace-string|Replace-String}
 * @namespace Replace-String
*/
@RpsModule("replace-string")
export default class RPSReplaceString {

    /**
 * @function replace-content
 * @memberof Replace-String
 * @example
 * ;Print 'hello yo world yo'
 * replace-content "hello hey world hey" "hey" "yo"
 * @param {string} content count or melody string.
 * @param {string} needle count or melody string.
 * @param {string} replacement count or melody string.
 * @param {number} fromIndex optional --fromIndex=5
 * @returns {void} 
 * @summary Replace string content
 * 
 * @see {@link https://www.npmjs.com/package/replace-string}
 * 
*/
  @rpsAction({verbName:'replace-content'})
  async replaceString (ctx:RpsContext,opts:Object, content:string,needle:string,replacement:string) : Promise<string>{
    return replaceString(content,needle,replacement,opts);
  }

}
