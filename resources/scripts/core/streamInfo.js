(function(){function e(e){return!$.twitch.GetStream(e).isNull("stream")}function t(e){var t=$.twitch.GetChannel(e);if(!t.isNull("status")){return t.getString("status")}return""}function n(e){var t=$.twitch.GetChannel(e);if(!t.isNull("game")){return t.getString("game")}return""}function s(e){var t=$.twitch.GetStream(e),n=new Date,s,r;if(t.isNull("stream")){return"Stream is offline"}s=new Date(t.getJSONObject("stream").getString("created_at"));if(s){r=n-s;return $.getTimeString(r/1e3)}else{return"Stream is offline"}}function r(e){var t=$.twitch.GetStream(e),n;if(t.isNull("stream")){return"Stream is offline"}n=new Date(t.getJSONObject("stream").getString("created_at"));return $.dateToString(n)}function a(e){var t=$.twitch.GetStream(e);if(!t.isNull("stream")){return t.getJSONObject("stream").getInt("viewers")}else{return 0}}function i(e){var t=$.twitch.GetChannel(e);if(!t.isNull("followers")){return t.getInt("followers")}else{return 0}}function g(e,t,n){var s=$.twitch.UpdateChannel(e,"",t);if(s.getBoolean("_success")){if(s.getInt("_http")==200){$.inidb.set("streamInfo","game",s.getString("game"));$.say('Changed the game to "'+s.getString("game")+'"!');$.logEvent("streamCommand.js",25,$.username.resolve(n)+" changed the current game to "+s.getString("game"))}else{$.say($.whisperPrefix(n)+"Failed to change the game. TwitchAPI must be having issues");$.consoleLn(s.getString("message"));$.logError("streamCommand.js",29,s.getString("message"))}}else{$.say("Failed to change the game. TwitchAPI must be having issues");$.consoleLn(s.getString("_exception")+" "+s.getString("_exceptionMessage"));$.logError("streamCommand.js",34,s.getString("_exception")+" "+s.getString("_exceptionMessage"))}}function o(e,t,n){var s=$.twitch.UpdateChannel(e,t,"");if(s.getBoolean("_success")){if(s.getInt("_http")==200){$.inidb.set("streamInfo","title",s.getString("status"));$.say('Changed the title to "'+s.getString("status")+'"!');$.logEvent("streamCommand.js",54,n+" changed the current status to "+s.getString("status"))}else{$.say($.whisperPrefix(n)+"Failed to change the status. TwitchAPI must be having issues");$.consoleLn(s.getString("message"));$.logError("streamCommand.js",58,s.getString("message"))}}else{$.say($.whisperPrefix(n)+"Failed to change the status. TwitchAPI must be having issues");$.consoleLn(s.getString("_exception")+" "+s.getString("_exceptionMessage"));$.logError("streamCommand.js",63,s.getString("_exception")+" "+s.getString("_exceptionMessage"))}}$.getFollows=i;$.getGame=n;$.getStatus=t;$.getStreamStartedAt=r;$.getStreamUptime=s;$.getViewers=a;$.isOnline=e;$.updateGame=g;$.updateStatus=o})();