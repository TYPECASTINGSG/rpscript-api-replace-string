/**
 * @module replace-string
 */

const replaceString = require('replace-string');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("replace-string")
export default class RPSReplaceString {

  @rpsAction({verbName:'replace-content'})
  async replaceString (ctx:RpsContext,opts:Object, content:string,needle:string,replacement:string) : Promise<string>{
    return replaceString(content,needle,replacement);
  }

}
