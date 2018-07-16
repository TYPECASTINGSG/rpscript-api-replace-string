const replaceString = require('replace-string');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Replace String module
 * @namespace replace-string
*/
@RpsModule("replace-string")
export default class RPSReplaceString {

  @rpsAction({verbName:'replace-content'})
  async replaceString (ctx:RpsContext,opts:Object, content:string,needle:string,replacement:string) : Promise<string>{
    return replaceString(content,needle,replacement);
  }

}
