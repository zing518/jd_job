/*
抢500-100券(中了群主回收)
不会用加群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#抢500-100券(中了群主回收)
55 9,13,19,20,21 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js, tag=抢500-100券(中了群主回收), img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "55 9,13,19,20,21 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js,tag=抢500-100券(中了群主回收)
===================================Surge================================
抢500-100券(中了群主回收) = type=cron,cronexp="55 9,13,19,20,21 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js
====================================小火箭=============================
抢500-100券(中了群主回收) = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js, cronexpr="55 9,13,19,20,21 * * *", timeout=3600, enable=true
 */
const $ = new Env('抢500-100券(中了群主回收)');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

var _0xodj='jsjiami.com.v6',_0xodj_=['‮_0xodj'],_0x3db0=[_0xodj,'w5AFw5PDhRc=','wrHCj8Kaw53Cow==','YxDCksOHOA==','wp9+Q8OIDQ==','Kw1sw7p+w4MDIsKnwo/Dmw==','DTI7w5vCv8KFDGE=','wrcDHifDiDFR','MiTCrsKkw4gHGkVdw7k=','Kw1sw69uw4wAFcKmwp0=','w4jDugrDvns=','BAYLw4/CvQ==','UMO7woQGcQ==','w4PDmMOxK14=','wq7DuThuw58=','YMKcwq0oaw==','PsOsIVdpwoBhKADCkXE=','TjDChsOvwqw=','PsOsIVxzwoJ5GQ==','PsOsIVV9wpho','dcKJwooKRQ==','McOHw4AmaA==','C8O8KMKyw6U=','w5nDgiPCkg4=','KUhPbMOz','w5MsE8Os','w77CpcOqLwpywr4=','wqrDgARX','GmV/','ccK+wpQ=','IBMQw5LClcKpLU4=','YhDCosO5wpg=','F8KkIA==','c8K1wpYdc8OMwog=','fkfDkUdYwotQ','wpMJBQjDgCB+wrIO','Wk3DikhQwppCEhU=','wpzDvjo=','MsOmw4ghTsON','dzAVwrlo','w7nDgsKKc1DDn3pLZcOCw73DoDUNwoNzUcKFwpNOMcOYwrdvwpzCvMO0w6HDs8Kww7XDuMK5w4DDtcKaYzcmaiLDpiI=','X+OBiuODkeODouOCquOBouOBpOaJluihtOaVvOmXihDCrQ==','w7bCosKrw4rCng==','FC7CjsKewr4uX8KdEm9bXytbE8KnwpDDk1HCoBkzw6A8LlzCk1JCOMKIwpZKd17CqcOuUMKwTizCssKqwpRgwpY/LEY2wqDDqsOHwqrCrGxyw7NIJMOPWErDvB3DoCzCk8KA','LcKGw5piw4zCv8OSw4gxOsKDw7thfA==','D8OEPMKtw48Uw6LCkcO3V8K4fQpZDV3ChcK2w7VWw54kLUUFwr/CnC50GWzChWA=','woXCryslwrA=','ek3Dl1A=','w4TDtcOTHwrDv8KNbD8=','w5A9HsOvwq/CrzzCssOpGgPDl8O1KSDCnhEgw6fDjFk9w6p2Xw7Cs8OlOTfCrMKdAcO9ScKNw500BsK9wpdnFcKyRBQMw5pfwq/DncKjw5ZOf8KQwqA+ZsKmwqTCg2fCkyfCj8KCw4AEw6wuwp3CjWHCs8KXw7fDkMKHCGVmwq4CwqLDgsOFwpbDlsOrw657w7HDp2jDmsOAw6TDoF7Cq8ONDBZhwphXw7JBwrHCrzjDv8Oawq9Gw7bCvcO0w64OKMKIBGRlwqLCnn1fw4bCpiN0QWxCacOMYMKHwq7Dh2ECQMOUw4tjIMOlIcOkwqMuMcKwQsK3DyVwA3J9SsKAZSpRwqgJw554w4IgGMKIU8Kxw4MqPcKjDMOPXsK4w79xwprDkDJywqJ9XFhswpgcw7BowpAXJsKFNSXDpcO4VsO0ICgm','JibCp8OkwplmSDDCvg==','HWRtUMKNcXhvw7VXKMOwZCnCuxrCgMKkwqtTw5pHwoPCvcKKPjrDj8OOw455wpRAw7PCisKxwp8Gw7ovwrHDs8KGw5HCqWdjwr7CtMKtw4c+woxvRMOYw4HChnEbwrQ5wrrDv8K2FcKDeU5Zw7xWc8KowqPCi8OuIsKnw5MVa8KRC8OHasKsLsKmMMOuwqBXwqLCvcKSw4rDoMK+w4zDqcOSwqrChsOZVFTDh8Ksw4HCpcOeBMKlw6J7w7PCvcOxYD1PwojCicKPWTk3NhnDmDXDhsKFw6k6w57DkENCVsOSRj3Co0/CkgdYIBHCu8O7Mh7DsMOCw4TCqhPDmH/Ck8Otw4t+CGTCtsKrJRYBKsOgw7srwrTCp8ObRMKtVsK2wpfCg0jCl8KJIsOBDhUAw5XChMKDd8KDcXhnwqHDhhfDq8K0w7RCXsOgw7vDsUPCkjxjwrlZw4VPX2jCj8KQw6HDumQzRwwIw77Cu2bDg3nDvTVbbzohw4vDjcOxMcKXwr7CjgXCthXDkzIEwpQXeVdgJcK3N8KfwqocSsKzwpMDwqXCj8K0OcKPw57Cj8Kcw7HDqsKJI03DqcO+w5gwBMOrwrrCvsKZVlIsBcKmwrcEw7bCr8K7w5/CvsOxwoPDv8OxwpzCqRcqesObw5N+V2dfAnrDncKQd8KcP8KCeSpEw6vCssOVw6EpcB0Sw6doKMODLVYvwpfCrMKAwqnDrsO6w5jDsHs5w4AUwqJPIcKyw6HDv1vCqU/Dh8KFLwrCiMKkAlpOZ1DDu3J4wqlzwq/DiFzDvsO6wr/ClXkNw59Yw7lWw4jCoBLCqiDDoMO2w6rCgi1hC37DkmLCvB/DnsKfJsK/J8KGAwnDkhnDm0hFw6LCgV0CQMOiNUhDE37DngjCm0XDoTHDjsOsMAnDqMOadEjCiMO0JcOkQBZ3w7AMwrLCmMOwwoPClsK7wrDDnX3CrsKRY8OAwozCqF56BsOQFybDpBIdwrjDscOKazUWbSJpAcK0w6FLQcKowq3CkMKfwqXCoXfCrlsNTyfDrcOWwp3ClMKuIRTDr8K0wp7ClsKuw4jCgR9uQsOzwpXCrE3DuMKtKw5SA8KMw6xAQsOLfAUOwqnDvRkeZVXDmMOywrltKsK2w40uJE8Xw6RyOcKzTcOOBm04w5wow6p+wqdOMsOUB8Ohw43CicOJwq0QA8OsI0IWw7l2X8ONw6QNw7w5GhTDmAXCnkfCoMKOw6l5YS3CtMOiwq7Cm8KKDsK0VsOOwo/Ct3zCmjbDuF7CiRp9w7Qiw6gjw6jCnsOIJThQw5rCqWkWaMKndGfCicO4wpvCvQphw4zDlMO3wqYSw4EBwosdbsOGMMKJCMO5dlzCvcK6f8KOw4nDrcKGw6bDiMOPZiHCicOywoLDjwU2w5UBGsOtZMKlwr7DuntIIhPCoU9hWlDCp30iYwIVD2vDjwcsOw/CjcOAw5URwqTCugUIAMORZwAFDSTDjsOXUEfDk8KjPTvDrUhHwoUuwpEzw6xzeUJtw6jCsMOSG3Itw5VrfcKsT1I0woDCm3DCpcOBLMKowpjCrMOlwrjDgUbCuQ3DljVCFcOVU1jCp8OdwrEHwr4kKChgwo3ClcOHOyHDiE1cwrrDu08oJyPCsFXDtgrDr8Oow4Zow5ADwpUueTrDnVfCoMO1K8Kvw7PDmjxcwrbCv8Oxw6c0IcOMV8OvTMKWCMOhw4HCvcKuODsww7QVCRbCrsKNScOIAMOsw75kwoHCq8KXUMOmRsKlwo5VwqvChWPDp8O8w7bCj0rCi8OmeicmwqHCnMOYw6LCvz8fw7tgwoHDq8O/JwAMMMKIUR9YM8O+IcKqw5vCg8KoSsK7exrDm3PChgzCuFIsHcK+RBfCrMKiwokOUXXDt3PDjcOMwotyPG9qR8O2woLDllQyb8OLW8OueMKJFw/ChcKSSsKSZizClhLCjX4hCcKBO8KJUsKCWw3Dqnw0woUIwqVRFsOSwqAmPgbDqsKfwqnCvsOHwqHDvQN/PsOzwrDDpcKcw4sqYi4Tw7vConbDoD/CuwXCgcKAw6glwrfCqCnDtTvCoy4uw4wdwrXDtcOjVsOfVMOewpDCpR50wpJAw6wTw5/DqjnDpj8NOSoISsOiwpQNXcKXIcOcw7wVwok6w5guwpgXBsKOwqLCocO9wq5+w5bCrDnCrcO0RFApwoIqwp9wXMO4wpDCkMKtwo0sFBICIcO+wqfDnFXDoEMewq5EwpTCjlVNwprChmJtw69ldzxkLiXDsnjCicKZOMOJXnIxDHLCr8KZwq5edRLCpMO3PSUxTMOWJDEJOAQ9w7tkW3MJID0uwp7DosOuw4vDqMO7wo0KwpBjw74TK8KzwpwfDMOeK8OIw4wjMcKueMOyUEXCnsO7DxlKfsOgUcKQwqZCw6wrw53DpMOSbAEsw6NrwrlXwpjDjsOIwocnPTUlW3B5XsO6TVvDkMOHw6NFw5AjFMOAwqFewrfDkMOkw5bDukbDhRvDqX0rUAHCsG9+wq8Lej1cw5Zwc8KbbMKWw5JFGMOlOMK6OHF2woTCosOCw7Ndw6pdwoZewpk0woUIfSLCtAFqwq4cQmzDvsKhcxoLKWDCuWpyL8OYw4Ndw7VAwoHCq8OHQsOFwpHCmsOQYnrDuMO5aHAqw5XDiMKvw4NQwpIhw4zDvEgqGcO7wrVAP8O/wp1WTRZob24gwoPDozPCrMOpwprCusOEPg4mwrF+XFjCikzCvDDDgFVmw53Dgg3ClcKGw78ew4c/wpbDgcOLTzZBw6vCoW3Di8K/wp90RiI2RMKIwpouw7pkw4FnSMO7wpfCoTnDjyItUMOQw5MLw5vCr15OUcOhw4QWw4IQw6vDkMK4fcKWCcKfKnQnGcKhRMO2wp7CpXDCg0EdFG7CqcKzw5kiw6xTUzfCg2/CrMOPwqXCt8OMBcKKwpLCrSxNHcKFZCHChD16BWAmLTDCnsKERcK+bMOnQV1NwpY2w7fDg8OkwqRlw4UXw5nCscO9Rl0Cw4rCrcK0wpDDncOyw7vDtlbDlcO4wq1lYiVOwpoHwrbDuDgEwo/CmGHCknsNwo0FDxcsw6Eew4fCmsKpO8KswrzDvcKMb2PDnw1hAcO7w7kaPhjDlwPDr19eK8Kyw55/wqw2Cg1vwq3ClybDrlPDpVktKFQEw5lkezA0ScOLYxBWAsO0QsO1e8O3JcKsVcKxHm93UxoiU2lcH8KvL0XCgl0uwqZlbCDCk8K8w4TDosO6wo3DsMK3HMO6T8OZNsKww7HCmsKAMMOZwr3CnsKiARHDhzkEdsKXfxDCrQjDh8KEw73DlsOPw5UZMMOrwrHDvMOewpnCtCzCqsKmwqkiFcORwo06TsOTAUl4w5jCusOIScO4Z1kmDcKaFBXDp8Ocw47DrR3DqX7DlMK+b8OywrfCs3DDsMOQwrNMwrBTTcObwrfDohvDosOoB3RxJcKEw59DCWNNFyXDisK2worDn2szPMKBLsO2wpnCrmpcw5AkVsOqw6nCi2luYgNacsKUwq0wccOPw4gGL8KIYsOww5nDuzcgHMOQwoJkwqLCljzCnMKLw5/DvMK6VMO7IcOww69hfGMTUcOTw6s2wqcnwqXClxJmw6hDwrPCvMO3dsKLw5J/wpVEdsKowojDqMKtdGlUwrzCs8KYw4HCtUAawr/DoTMKwpnDvMKlLRE6AsO3w4DDg8O1QcO1RsOhBgxUw7/Cp8KFUcKzKz7CpC8Rck0Jw7hdQsKiXVI1w7Ykw6UbwpPCmsKOwrJ4P3BsHlEnw4hiwrJlwqvDlXkDL8OOwq/Cp8K7dMKxwo7Ckx7Cgj4RZGN2woFvTGwmDkHCosKtwosCV8Kxw7LCgcKFYcKUwqcNNnlEV2DCicKxL3LCrsKmwpFwwq9CBsKPw6Y3VXx0wpDDtkFgFsKKw5Jrw4TCpsOJwo7Dj8KZwoYQw4vCnWgGfMK2wojClsOWw6TCokBBFDMrTBjCg8OdC8K3X8K8dhDDkHQMX0NSdTbDjcOZd2fDrxzClhlvw6PCqk3DvMKpw6vDgFbCtMOrwppqfsKDw5rDlA4kS8OGwqHDi8KpVVDCsiYUZ8O0w61cXTrCucO1dMKGw51Fw58zGsKjKsOuw5zCrxTDhnkZZjsMPXtrBMKFVRbDiSVlwpzCswzCk3zCmx57UGRTw69gBsKWwrxpN8OLVsOCNxzCv8Kewr7Cn8OvwpnDn8Ohw6XDu8OmdTdZHDABNQ7DvELCgUlZw7fCjzV1PmhVXsK+ZgDDh8OxDzDDhSkiwp9nwoMxwoBLIMO8M8O+wrLDksOZU8OXw4p3XVcdbcK4woPDshsIwoJrwq7CiMOZwq3Cm8Oqw7nCvsO1wrDClgHCtcKyMg==','XwTCrcOEFA==','CRFsw5l+','fwXCpg==','w4DDiivDv3o=','MDUIw6bCtA==','bAXCusO6wo4zEGzDvgHDrzrCvMOXw7jCglXDrTfDlsOFw7oUw5/Cs8KGWcKbw7PClcO/E1/DrT5Gw5bCo8O8wp3DpwjCnQ==','wpDCiyMGwps=','wpPCsjc4wr0=','cWMRw6nDnA==','XMOGVMKcwqlZY8Ot','w4/Cp3t5G8OQw7jCgMOSw4c=','wo1gWTfCkjHDqWjCimrChA==','TsKkw686wrUNwoPDvR1K','TsKkw68twrEawok=','w7IYaQYG','bC9awrU4','w5/DhsKNQXQ=','H1HCvMOwwr8=','wpF3wpzDhFs=','EMKGwqJ3w6c=','Y8K4wroRdw==','aygRwpZ8','JcODOsKow5Y=','EirCucKzw7Q=','NkTCu8OmwoFnNg==','TjFQ','WcOlwqwNSw==','PU7CqA==','5Lqd5aeH55mz5YiZ5bWw57mc5oiK5ays77yG5pmF5aaX5YWG5pyqTw==','QuS7jeaskOW8leaLqOaUn+mUig3Cmw==','dTHDgBYJ','InDDqxk/','wq7npZXlkYXmipjooLbkuYrnoIY=','56+A5b6C5peE6Zew5aeY5Lqpwqsbwp8MLcKg56Sc772g57mH5q+k6L2s6KKWwog=','aTjCjcO8wqo=','w6LDqCw=','WsOvwrElZg==','AgvCkMK8w4s=','w6jDu8KyR0U=','UsOFwoA=','wpLDt8KlV1Ysw6szw5DCqMKXaFXDt8OyHUk2w6zCmsOHw45dS0xHfxI=','w47CqcKCw7zCr8Ki','wo5fWB7ClA==','HSd+w7Vl','BzY7w7XCuA==','FTTCnsKLwrU=','AMOpw4DDogQ=','DcOfw5rDiTpUBQ==','OMOgw4M=','OcKHwpRKw4zDssOFw4U=','RMKeZsOrwoxdwqnDj8K0Mg==','cFHDqUxewpZf','RMKyw7w=','YirDohY=','44Ks5o6856SG44GNLglIw4bCmDDlt53lpqrmlaw=','5LuX5LuX6LWh5YyB','cEzDgUZB','w6QHw5LDvzgIBGk=','ZzoEwq5TwqdpDQ==','ZOitg+mGgeaVseebneW8ouiMtOWMs8KUUMKiJgIHQAXDncO5w7ZYw4JnbR4dwrfDlyN4GyfCgmHCjiZ6eVjDscOYwrLCoMKNbjXDo8OfwqlDH8OiZQ==','w5A9HsOvwq/CrzzCssO7DQ3DncK+MiDCmVtkw6DCjVd9w6U8UwHDsMO6fzHCocKgBsOvScOaw4oyA8KBw49fPg==','woZqSg==','w53DocKXcnA=','w7xPVE/ChQ==','LzYGw6DCvA==','wpTDtA0WDg==','VcO5wqktew==','Izsjw7fCmQ==','F8OQAsKGw4w=','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','GMKJYkE=','w6TDtCTCkQ==','XiYG','wo0xwrjDtcOz','wqXDvjsGOQ==','w73DsinCvBXDjWISXnk=','HcOBLsKCw4kTw6bCqMOtXw==','wpV6wqrDiHDCs1odTzQ=','5oqLw7TCq1nDvV/DnMKj5YmB','wrpqW8OUJw==','Dy/CmMKtwqJwFcO/AHg=','44KI5Lun5LieW1sh55mS5Yi277+h5our57yO5Lmu5Zq25pe844Oe','w4DDtcOXDg==','w6YBw5Y=','EMO7w70dWg==','fh4Iwq1O','w6PDu8KXQHY=','w67DtsOPIFU=','wqHChSwDwpE=','wpwxwoDDm8Ox','w43DuADDq1I=','L0RafQ==','UMK+w6LCog==','eCPDqh0=','IAd/','IVTDqiwc','XcOLwpMCVw==','fQHlp77otpfDiSrlj4zlm4fCrsKk','CMOdIsKgw4obw7o=','w5wmBMO6','w6kxwoLDsUnDvER3w6xI','ZMKiwo0NfcOMwpAxJA==','UsK/wpAUc8OM','wrcDHivDhjBGwoU=','Kw1sw7Fiw4EaD8Knwp0=','w60Lw4XDhxMKBmJFwrI=','w5bCqcKfw68=','aBTCoMOtwolh','w7U7wpbDuAXDuUQ=','MMKmH8Kvwoc=','C1fDri0Nw4k=','w48ZXi85FA==','fkfDkWVMwpNdATQ+w5k=','M8Oqw5AYRMORw5nCtA==','XcKow7nCiAAabg==','dRPCtcOjGHrDjzE=','L8KjRUYvworCkVnDny8=','d8Orw5TCo1A=','w5vCu0fDscOr','wjsMpjPiarmiX.cComu.ve6IFeP=='];if(function(_0x1f97f9,_0x32b97e,_0x199031){function _0xbcb45d(_0xee32b5,_0x19448b,_0x1a1f78,_0xad4a44,_0x262b72,_0x4c4547){_0x19448b=_0x19448b>>0x8,_0x262b72='po';var _0x3b5339='shift',_0x1d1aa3='push',_0x4c4547='‮';if(_0x19448b<_0xee32b5){while(--_0xee32b5){_0xad4a44=_0x1f97f9[_0x3b5339]();if(_0x19448b===_0xee32b5&&_0x4c4547==='‮'&&_0x4c4547['length']===0x1){_0x19448b=_0xad4a44,_0x1a1f78=_0x1f97f9[_0x262b72+'p']();}else if(_0x19448b&&_0x1a1f78['replace'](/[wMpPrXCueIFeP=]/g,'')===_0x19448b){_0x1f97f9[_0x1d1aa3](_0xad4a44);}}_0x1f97f9[_0x1d1aa3](_0x1f97f9[_0x3b5339]());}return 0xca8dd;};return _0xbcb45d(++_0x32b97e,_0x199031)>>_0x32b97e^_0x199031;}(_0x3db0,0x1eb,0x1eb00),_0x3db0){_0xodj_=_0x3db0['length']^0x1eb;};function _0x1993(_0x2d33d7,_0x43e7af){_0x2d33d7=~~'0x'['concat'](_0x2d33d7['slice'](0x1));var _0x31b344=_0x3db0[_0x2d33d7];if(_0x1993['SGGUGJ']===undefined){(function(){var _0x888dd6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1a7969='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x888dd6['atob']||(_0x888dd6['atob']=function(_0x38c0ba){var _0x10ec23=String(_0x38c0ba)['replace'](/=+$/,'');for(var _0x33b046=0x0,_0x38ee36,_0x1aca52,_0x2de843=0x0,_0x8af8a0='';_0x1aca52=_0x10ec23['charAt'](_0x2de843++);~_0x1aca52&&(_0x38ee36=_0x33b046%0x4?_0x38ee36*0x40+_0x1aca52:_0x1aca52,_0x33b046++%0x4)?_0x8af8a0+=String['fromCharCode'](0xff&_0x38ee36>>(-0x2*_0x33b046&0x6)):0x0){_0x1aca52=_0x1a7969['indexOf'](_0x1aca52);}return _0x8af8a0;});}());function _0x6c9db0(_0x5cbd01,_0x43e7af){var _0x339a5a=[],_0x45fe47=0x0,_0x533410,_0x5bb622='',_0x54ba73='';_0x5cbd01=atob(_0x5cbd01);for(var _0xcdf7dd=0x0,_0x4be702=_0x5cbd01['length'];_0xcdf7dd<_0x4be702;_0xcdf7dd++){_0x54ba73+='%'+('00'+_0x5cbd01['charCodeAt'](_0xcdf7dd)['toString'](0x10))['slice'](-0x2);}_0x5cbd01=decodeURIComponent(_0x54ba73);for(var _0xef6058=0x0;_0xef6058<0x100;_0xef6058++){_0x339a5a[_0xef6058]=_0xef6058;}for(_0xef6058=0x0;_0xef6058<0x100;_0xef6058++){_0x45fe47=(_0x45fe47+_0x339a5a[_0xef6058]+_0x43e7af['charCodeAt'](_0xef6058%_0x43e7af['length']))%0x100;_0x533410=_0x339a5a[_0xef6058];_0x339a5a[_0xef6058]=_0x339a5a[_0x45fe47];_0x339a5a[_0x45fe47]=_0x533410;}_0xef6058=0x0;_0x45fe47=0x0;for(var _0x5cb3a9=0x0;_0x5cb3a9<_0x5cbd01['length'];_0x5cb3a9++){_0xef6058=(_0xef6058+0x1)%0x100;_0x45fe47=(_0x45fe47+_0x339a5a[_0xef6058])%0x100;_0x533410=_0x339a5a[_0xef6058];_0x339a5a[_0xef6058]=_0x339a5a[_0x45fe47];_0x339a5a[_0x45fe47]=_0x533410;_0x5bb622+=String['fromCharCode'](_0x5cbd01['charCodeAt'](_0x5cb3a9)^_0x339a5a[(_0x339a5a[_0xef6058]+_0x339a5a[_0x45fe47])%0x100]);}return _0x5bb622;}_0x1993['yrXnFy']=_0x6c9db0;_0x1993['kbpHmY']={};_0x1993['SGGUGJ']=!![];}var _0x2ade69=_0x1993['kbpHmY'][_0x2d33d7];if(_0x2ade69===undefined){if(_0x1993['inXQPi']===undefined){_0x1993['inXQPi']=!![];}_0x31b344=_0x1993['yrXnFy'](_0x31b344,_0x43e7af);_0x1993['kbpHmY'][_0x2d33d7]=_0x31b344;}else{_0x31b344=_0x2ade69;}return _0x31b344;};const fetch=require(_0x1993('‫0','b8Dn'));let cookiesArr=[],cookie='',message;Date[_0x1993('‫1','kJ8L')][_0x1993('‮2','kJ8L')]=function(_0x4c7ffd){var _0x2a8974={'uyLGQ':function(_0x1ff73a,_0x2b1aa1){return _0x1ff73a+_0x2b1aa1;},'KmXYs':function(_0x36194c,_0x142bc7){return _0x36194c==_0x142bc7;},'nyUEt':function(_0x5db7b0,_0x5e4e94){return _0x5db7b0+_0x5e4e94;}};var _0xf4b958={'M+':this['getMonth']()+0x1,'d+':this['getDate'](),'h+':this[_0x1993('‮3','!2p8')](),'m+':this[_0x1993('‫4','$wU&')](),'s+':this[_0x1993('‮5','#oy4')](),'S':this['getMilliseconds']()};if(/(y+)/[_0x1993('‫6','ScI5')](_0x4c7ffd))_0x4c7ffd=_0x4c7ffd['replace'](RegExp['$1'],_0x2a8974['uyLGQ'](this['getFullYear'](),'')['substr'](0x4-RegExp['$1'][_0x1993('‫7','n5g2')]));for(var _0x18fed2 in _0xf4b958)if(new RegExp('('+_0x18fed2+')')['test'](_0x4c7ffd))_0x4c7ffd=_0x4c7ffd[_0x1993('‮8','b8Dn')](RegExp['$1'],_0x2a8974[_0x1993('‫9',')A%!')](RegExp['$1'][_0x1993('‮a','IEK(')],0x1)?_0xf4b958[_0x18fed2]:_0x2a8974['nyUEt']('00',_0xf4b958[_0x18fed2])[_0x1993('‮b','xSaZ')]((''+_0xf4b958[_0x18fed2])['length']));return _0x4c7ffd;};var date=new Date();function getCurrentDateTimeT(){var _0x2fcb5f={'ZSpwd':function(_0x41e9e6,_0x4a4877){return _0x41e9e6+_0x4a4877;},'ZkbQa':function(_0x37bf99,_0x15b538){return _0x37bf99+_0x15b538;},'jLBpx':function(_0x305d35,_0x1bd009){return _0x305d35(_0x1bd009);},'raYAL':function(_0x4bf196,_0x5cb89b){return _0x4bf196(_0x5cb89b);},'qfSlO':function(_0x1618cd,_0x837403){return _0x1618cd(_0x837403);}};var _0x10c2a3=new Date();var _0x3407b7=_0x10c2a3[_0x1993('‮c','LgaP')]();var _0x2be0df=_0x2fcb5f['ZSpwd'](_0x10c2a3[_0x1993('‮d','7t$@')](),0x1);var _0x40b3e9=_0x10c2a3[_0x1993('‫e','43Hc')]();var _0x255d58=_0x10c2a3[_0x1993('‫f','FOa#')]();var _0x370863=_0x10c2a3['getMinutes']();var _0x1a9e26=_0x10c2a3[_0x1993('‫10','sMxl')]();return _0x2fcb5f[_0x1993('‫11','5wls')](_0x2fcb5f[_0x1993('‮12',')s@0')](_0x2fcb5f['ZkbQa'](_0x2fcb5f[_0x1993('‮13','#oy4')](_0x3407b7,'年')+formatZero(_0x2be0df)+'月',_0x2fcb5f['jLBpx'](formatZero,_0x40b3e9)),'日\x20')+_0x2fcb5f[_0x1993('‫14','SWao')](formatZero,_0x255d58),':')+_0x2fcb5f[_0x1993('‫15','FOa#')](formatZero,_0x370863)+':'+_0x2fcb5f[_0x1993('‮16','I[Y^')](formatZero,_0x1a9e26);}function getCurrentDateTime(){var _0x20d81a={'Vscnm':function(_0x566765,_0x4b358c){return _0x566765+_0x4b358c;},'nQDYm':function(_0x3f91db,_0x403e5e){return _0x3f91db+_0x403e5e;},'nQcgN':function(_0x5e3699,_0x428c1b){return _0x5e3699+_0x428c1b;},'tLOQy':function(_0x204fc1,_0xfe6d93){return _0x204fc1(_0xfe6d93);},'hHptJ':function(_0x5bf9cb,_0x5eb51a){return _0x5bf9cb(_0x5eb51a);}};var _0xe305a4=new Date();var _0x3539e0=_0xe305a4[_0x1993('‫17','$wU&')]();var _0x2d3d59=_0x20d81a['Vscnm'](_0xe305a4[_0x1993('‮18','Dy)9')](),0x1);var _0xc18c13=_0xe305a4[_0x1993('‮19','!2p8')]();var _0x496adc=_0xe305a4['getHours']();var _0x32241d=_0xe305a4[_0x1993('‫1a','!Ntv')]();var _0x327562=_0xe305a4[_0x1993('‫1b','$wU&')]();return _0x20d81a['nQDYm'](_0x20d81a[_0x1993('‮1c','MjP8')](_0x20d81a[_0x1993('‫1d','Dy)9')](_0x20d81a[_0x1993('‮1e','76f$')](_0x20d81a['nQcgN'](_0x3539e0+'-'+_0x20d81a[_0x1993('‮1f','ihSe')](formatZero,_0x2d3d59),'-')+formatZero(_0xc18c13)+'\x20',_0x20d81a[_0x1993('‫20','fP()')](formatZero,_0x496adc))+':',_0x20d81a[_0x1993('‫21','kJ8L')](formatZero,_0x32241d)),':'),_0x20d81a['hHptJ'](formatZero,_0x327562));}function getCurrentDateTimeZ(_0x105c8f){var _0x253ac7={'JAHeQ':function(_0x3cb020,_0x4dd429){return _0x3cb020+_0x4dd429;},'MhlEm':function(_0x3bfe80,_0xc8f952){return _0x3bfe80+_0xc8f952;},'aYhsW':function(_0x49ec15,_0x58f7e2){return _0x49ec15+_0x58f7e2;},'lMGQz':function(_0x408fa2,_0x12803c){return _0x408fa2+_0x12803c;},'eHdsC':function(_0x5539b9,_0x57193d){return _0x5539b9(_0x57193d);},'WEhmt':':00:00'};var _0x5942e7=new Date();var _0x303828=_0x5942e7[_0x1993('‫22','ALLq')]();var _0x436ee8=_0x253ac7[_0x1993('‫23','n5g2')](_0x5942e7[_0x1993('‮24','ALLq')](),0x1);var _0x337036=_0x5942e7[_0x1993('‮25','ALLq')]();return _0x253ac7['MhlEm'](_0x253ac7['MhlEm'](_0x253ac7[_0x1993('‫26','kJ8L')](_0x253ac7['lMGQz'](_0x303828,'-')+_0x253ac7[_0x1993('‮27','7t$@')](formatZero,_0x436ee8)+'-'+_0x253ac7[_0x1993('‫28','84qM')](formatZero,_0x337036),'\x20'),_0x105c8f),_0x253ac7[_0x1993('‫29','MSYn')]);}function formatZero(_0xbe7952){var _0x6f148a={'VCFEC':function(_0x28bc97,_0x479a64){return _0x28bc97<=_0x479a64;}};if(_0xbe7952>=0x0&&_0x6f148a[_0x1993('‮2a',')pVm')](_0xbe7952,0x9)){return'0'+_0xbe7952;}else{return _0xbe7952;}}function sleep(_0x10065d){return new Promise(_0x2fa7ae=>setTimeout(_0x2fa7ae,_0x10065d));}if($['isNode']()){Object[_0x1993('‮2b','43xr')](jdCookieNode)[_0x1993('‫2c','zH2f')](_0xc0c6fb=>{cookiesArr[_0x1993('‮2d','fP()')](jdCookieNode[_0xc0c6fb]);});if(process[_0x1993('‮2e',')pVm')]['JD_DEBUG']&&process[_0x1993('‮2f','kJ8L')][_0x1993('‮30','Dy)9')]===_0x1993('‫31','n5g2'))console[_0x1993('‮32',')A%!')]=()=>{};}else{cookiesArr=[$[_0x1993('‫33','kJ8L')]('CookieJD'),$[_0x1993('‫34','LgaP')](_0x1993('‫35','!2p8')),...jsonParse($['getdata'](_0x1993('‮36','LgaP'))||'[]')[_0x1993('‮37','2VfH')](_0x5d59cd=>_0x5d59cd['cookie'])][_0x1993('‫38','7t$@')](_0x9ec03e=>!!_0x9ec03e);}!(async()=>{var _0x3ce7f1={'pIxWR':'3|4|0|6|1|2|5|7','NtUZK':function(_0x58f4a1,_0x4589ac){return _0x58f4a1+_0x4589ac;},'NqmuI':function(_0x23b4a0,_0x56ef3d){return _0x23b4a0+_0x56ef3d;},'NpsBW':function(_0x4cd4ec,_0xf90619){return _0x4cd4ec+_0xf90619;},'whXhe':function(_0x5a0855,_0x3e977d){return _0x5a0855(_0x3e977d);},'TaqXn':function(_0x26b6da,_0x2d9760){return _0x26b6da!=_0x2d9760;},'TrKpe':function(_0x257638,_0x1f8612){return _0x257638+_0x1f8612;},'Ffjfe':function(_0x2ba221,_0x3037dd){return _0x2ba221<=_0x3037dd;},'Mrloc':function(_0x2662b8,_0x6a2963){return _0x2662b8===_0x6a2963;},'pPhwh':_0x1993('‫39','^s7Q'),'faeXl':'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','ZbGpd':_0x1993('‫3a','S4Ie'),'GhUVe':function(_0x4adf70){return _0x4adf70();},'YapJa':function(_0x1d47e5,_0x24141d){return _0x1d47e5<_0x24141d;},'Kwvip':function(_0x428f69,_0x17da52){return _0x428f69<_0x17da52;},'IQjnv':function(_0x31cff0,_0x466dbb){return _0x31cff0<=_0x466dbb;},'GkcZU':function(_0x178743,_0x3d04f3){return _0x178743<=_0x3d04f3;},'RZmej':function(_0x37e929,_0x157843){return _0x37e929-_0x157843;},'gOKlt':'\x0a===========https://github.com/JDWXX/jd_job.git===============','MrLCf':function(_0x24ec2c,_0x15104a){return _0x24ec2c==_0x15104a;},'yzOej':function(_0x2b71ee,_0xee8af9){return _0x2b71ee(_0xee8af9);},'EBkSF':function(_0x11ddba,_0x3f618b){return _0x11ddba/_0x3f618b;},'mICvW':function(_0x16088e,_0x4c6b73){return _0x16088e(_0x4c6b73);},'dEVDY':function(_0x3a6779,_0x37da5c){return _0x3a6779+_0x37da5c;},'WJJUj':_0x1993('‫3b','!Ntv'),'yMLDf':function(_0x30aec0){return _0x30aec0();},'oPNvp':function(_0x4d14b5,_0xde22a0){return _0x4d14b5<_0xde22a0;},'QOfIn':_0x1993('‮3c','ScI5'),'LWiqS':_0x1993('‮3d',']qRg'),'rMiCU':'*/*','cbHdk':_0x1993('‮3e','U$6)'),'YbqZr':_0x1993('‫3f','84qM'),'uHfKz':'\x22\x20Not;A\x20Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x2297\x22,\x20\x22Chromium\x22;v=\x2297\x22','EaIvl':_0x1993('‮40','2vId'),'ekGHY':_0x1993('‫41','LgaP'),'kSNLD':_0x1993('‮42','ihSe'),'IllaI':_0x1993('‮43','43xr'),'ydNGj':'no-referrer-when-downgrade','DtYHq':function(_0x1fa175,_0x2c5754,_0x559f62){return _0x1fa175(_0x2c5754,_0x559f62);},'AGwRX':_0x1993('‫44','n5g2'),'sWZCi':_0x1993('‮45',')pVm')};if(!cookiesArr[0x0]){if(_0x3ce7f1[_0x1993('‮46','FOa#')](_0x3ce7f1['pPhwh'],_0x1993('‫47','$wU&'))){$[_0x1993('‫48','FOa#')]($['name'],_0x3ce7f1[_0x1993('‮49','MjP8')],_0x3ce7f1[_0x1993('‮4a','Dy)9')],{'open-url':_0x1993('‮4b','n5g2')});return;}else{var _0x318b05=_0x3ce7f1[_0x1993('‮4c','2vId')][_0x1993('‮4d','2vId')]('|'),_0x405e7d=0x0;while(!![]){switch(_0x318b05[_0x405e7d++]){case'0':var _0x190e65=_0x3ce7f1[_0x1993('‮4e','twhs')](_0x1a86e2['getMonth'](),0x1);continue;case'1':var _0x29b3fd=_0x1a86e2[_0x1993('‫4f','uC1f')]();continue;case'2':var _0x701804=_0x1a86e2[_0x1993('‫50','5Rso')]();continue;case'3':var _0x1a86e2=new Date();continue;case'4':var _0x3cf73a=_0x1a86e2[_0x1993('‮51','Hxy#')]();continue;case'5':var _0x1bf5b1=_0x1a86e2[_0x1993('‮52','R6bE')]();continue;case'6':var _0x211e73=_0x1a86e2[_0x1993('‮53','R6bE')]();continue;case'7':return _0x3ce7f1[_0x1993('‮4e','twhs')](_0x3ce7f1[_0x1993('‫54','xSaZ')](_0x3ce7f1['NqmuI'](_0x3ce7f1[_0x1993('‫55','t6iA')](_0x3ce7f1[_0x1993('‮56','S4Ie')](_0x3ce7f1['NpsBW'](_0x3ce7f1[_0x1993('‫57','lQw7')](_0x3cf73a,'-'),formatZero(_0x190e65))+'-',formatZero(_0x211e73))+'\x20',_0x3ce7f1['whXhe'](formatZero,_0x29b3fd)),':')+_0x3ce7f1[_0x1993('‫58','@kkI')](formatZero,_0x701804),':'),formatZero(_0x1bf5b1));}break;}}}let _0x1e7e61=_0x3ce7f1[_0x1993('‫59','U$6)')](getCurrentDateTime);let _0x4b7c93=parseInt(_0x3ce7f1[_0x1993('‫5a','kJ8L')](formatZero,date['getHours']()));let _0x6306f5='';let _0x50e65b=0x0;if(_0x4b7c93<0xa)_0x6306f5=0xa;if(_0x3ce7f1[_0x1993('‮5b','^s7Q')](_0x3ce7f1['Ffjfe'](0xa,_0x4b7c93),0xe))_0x6306f5=0xe;if(_0x3ce7f1['Kwvip'](_0x3ce7f1['IQjnv'](0xe,_0x4b7c93),0x14))_0x6306f5=0x14;if(_0x3ce7f1[_0x1993('‮5c','84qM')](0x14<=_0x4b7c93,0x15))_0x6306f5=0x15;if(_0x3ce7f1['Kwvip'](_0x3ce7f1['IQjnv'](0x15,_0x4b7c93),0x16))_0x6306f5=0x16;if(_0x3ce7f1[_0x1993('‮5d','!Ntv')](0x16,_0x4b7c93))_0x6306f5=0x0;_0x50e65b=_0x3ce7f1['RZmej'](new Date(_0x3ce7f1['whXhe'](getCurrentDateTimeZ,_0x6306f5))[_0x1993('‫5e','lQw7')](),new Date(_0x1e7e61)['getTime']());console[_0x1993('‮5f','t6iA')](_0x3ce7f1[_0x1993('‫60','76f$')]);if(_0x3ce7f1['MrLCf'](_0x6306f5,0x0)){console[_0x1993('‮61','lQw7')](_0x1993('‫62','U$6)'));return;}console['log'](_0x1993('‫63','sMxl')+_0x3ce7f1[_0x1993('‫64','k0o0')](getCurrentDateTimeZ,_0x6306f5));console['log']('\x0a等待\x20'+_0x3ce7f1[_0x1993('‫65','IEK(')](_0x50e65b,0x3e8)+_0x1993('‫66','MSYn'));if(_0x50e65b>0x1b7740){console['log'](_0x1993('‮67','dWlN'));return;}await _0x3ce7f1[_0x1993('‫68','n5g2')](sleep,_0x50e65b-0x2);console[_0x1993('‮69','MSYn')](_0x3ce7f1['dEVDY'](_0x3ce7f1[_0x1993('‮6a','76f$')](_0x3ce7f1[_0x1993('‮6b','!Ntv')],_0x3ce7f1[_0x1993('‫6c','S4Ie')](getCurrentDateTimeT)),'《《《《《《'));console[_0x1993('‫6d','76f$')](_0x1993('‮6e','zH2f'));for(let _0x370ae5=0x0;_0x3ce7f1['oPNvp'](_0x370ae5,cookiesArr[_0x1993('‫6f','ScI5')]);_0x370ae5++){if(cookiesArr[_0x370ae5]){if(_0x1993('‫70','Hxy#')!==_0x3ce7f1[_0x1993('‮71','$wU&')]){cookie=cookiesArr[_0x370ae5];$['UserName']=decodeURIComponent(cookie[_0x1993('‮72','Dy)9')](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x1993('‫73',']qRg')]=_0x3ce7f1[_0x1993('‮74','NHUb')](_0x370ae5,0x1);$[_0x1993('‮75','NHUb')]=!![];$['nickName']='';message='';console[_0x1993('‮76','7t$@')]('\x0a******开始【京东账号'+$['index']+'】'+($[_0x1993('‫77','U$6)')]||$['UserName'])+_0x1993('‮78','84qM'));if(!$[_0x1993('‮79','LgaP')]){$[_0x1993('‮7a','R6bE')]($[_0x1993('‫7b','k0o0')],_0x1993('‮7c','xSaZ'),_0x1993('‮7d',')A%!')+$[_0x1993('‮7e','LgaP')]+'\x20'+($[_0x1993('‫7f','#oy4')]||$[_0x1993('‫80','^s7Q')])+_0x1993('‮81','84qM'),{'open-url':_0x1993('‮82','43xr')});continue;}console[_0x1993('‫83','Hxy#')]('\x0a开始抢\x20500-100券\x20');for(let _0x7b2f46=0x0;_0x3ce7f1['oPNvp'](_0x7b2f46,0x5);_0x7b2f46++){await fetch(_0x3ce7f1[_0x1993('‫84','S4Ie')],{'headers':{'accept':_0x3ce7f1['rMiCU'],'accept-language':_0x3ce7f1['cbHdk'],'content-type':_0x3ce7f1['YbqZr'],'sec-ch-ua':_0x3ce7f1[_0x1993('‫85','dWlN')],'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x1993('‫44','n5g2'),'sec-fetch-dest':_0x3ce7f1[_0x1993('‫86','Dy)9')],'sec-fetch-mode':_0x3ce7f1[_0x1993('‫87','2VfH')],'sec-fetch-site':_0x3ce7f1[_0x1993('‮88','76f$')],'cookie':cookie,'Referer':_0x3ce7f1[_0x1993('‮89','Dy)9')],'Referrer-Policy':_0x3ce7f1[_0x1993('‮8a','84qM')]},'body':_0x1993('‫8b','#oy4'),'method':_0x1993('‫8c','sMxl')})['then'](_0x8c7ad=>_0x8c7ad[_0x1993('‮8d','MSYn')]())['then'](_0x1d2052=>{console[_0x1993('‮8e','^s7Q')](_0x1d2052);var _0x5742f2='成功';if(_0x3ce7f1[_0x1993('‫8f','r$%)')](_0x1d2052,null)&&_0x3ce7f1[_0x1993('‫90','2VfH')](_0x1d2052[_0x1993('‫91','MSYn')],null)&&_0x3ce7f1['TaqXn'](_0x1d2052[_0x1993('‮92','84qM')]['indexOf'](_0x5742f2),-0x1)){notify[_0x1993('‫93','@kkI')](_0x1993('‮94','R6bE'),_0x3ce7f1[_0x1993('‫95','I[Y^')](_0x1d2052[_0x1993('‮96',']qRg')],_0x1993('‮97','zH2f')));}});await $[_0x1993('‫98','ihSe')](0x1);}console[_0x1993('‫99','#oy4')]('\x0a开始抢\x20200-30券\x20');await _0x3ce7f1[_0x1993('‫9a','7t$@')](fetch,_0x3ce7f1[_0x1993('‫9b','^s7Q')],{'headers':{'accept':_0x3ce7f1[_0x1993('‮9c','S4Ie')],'accept-language':_0x3ce7f1['cbHdk'],'content-type':_0x3ce7f1[_0x1993('‫9d','ihSe')],'sec-ch-ua':'\x22\x20Not;A\x20Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x2297\x22,\x20\x22Chromium\x22;v=\x2297\x22','sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x3ce7f1[_0x1993('‫9e','2vId')],'sec-fetch-dest':_0x3ce7f1[_0x1993('‫9f','r$%)')],'sec-fetch-mode':_0x3ce7f1['ekGHY'],'sec-fetch-site':_0x3ce7f1[_0x1993('‫a0','MjP8')],'cookie':cookie,'Referer':'https://prodev.m.jd.com/mall/active/2UboZe4RXkJPrpkp6SkpJJgtRmod/index.html?unionActId=31137&d=SLua6fE&s=&cu=true&utm_source=kong&utm_medium=jingfen&utm_campaign=t_2011670082_&utm_term=5735c7b03e674d02b1d4c0b0877a64ab','Referrer-Policy':'no-referrer-when-downgrade'},'body':_0x3ce7f1['sWZCi'],'method':_0x1993('‫a1',')pVm')})['then'](_0x1e5722=>_0x1e5722[_0x1993('‫a2','43Hc')]())[_0x1993('‫a3','k0o0')](_0xdc7c90=>{console[_0x1993('‮a4','$wU&')](_0xdc7c90);});}else{if(n>=0x0&&_0x3ce7f1[_0x1993('‮a5','IEK(')](n,0x9)){return _0x3ce7f1['TrKpe']('0',n);}else{return n;}}}}})()[_0x1993('‫a6','76f$')](_0x24fa4e=>{$['log']('','❌\x20'+$['name']+_0x1993('‮a7','lQw7')+_0x24fa4e+'!','');})[_0x1993('‫a8','84qM')](()=>{$[_0x1993('‮a9','43xr')]();});;_0xodj='jsjiami.com.v6';

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}