const characters = {
	star_zhangrang: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["starduhai", "starlingse"],
	},
	star_wenchou: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["starlianzhan", "starweiming"],
	},
	star_dingfeng: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stardangchen", "starjianyu"],
	},
	star_fazheng: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["starzhiji", "staranji"],
	},
	matie: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["dczhuiwang", "dcquxian"],
	},
	hansong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["dcyinbi", "dcshuaiyan"],
	},
	chezhou: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dcshefu", "dcpigua"],
	},
	star_xunyu: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["staranshu", "starkuangzuo"],
		clans: ["颍川荀氏"],
	},
	star_zhangzhao: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["starzhongyan", "starjinglun"],
	},
	star_sunjian: {
		sex: "male",
		group: "qun",
		hp: 4,
		maxHp: 5,
		skills: ["starruijun", "stargangyi"],
	},
	liqueguosi: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xiongsuan"],
		names: "李|傕-郭|汜",
	},
	star_zhangchunhua: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["starliangyan", "starminghui"],
	},
	star_yuanshao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["starxiaoyan", "starzongshi", "starjiaowang", "staraoshi"],
		isZhugong: true,
	},
	star_dongzhuo: {
		sex: "male",
		group: "qun",
		hp: 5,
		skills: ["starweilin", "starzhangrong", "starhaoshou"],
		isZhugong: true,
	},
	star_yuanshu: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["starcanxi", "starpizhi", "starzhonggu"],
		isZhugong: true,
	},
	star_caoren: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["starsujun", "starlifeng"],
	},
	star_sunshangxiang: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["starsaying", "starjiaohao"],
	},
	dc_jikang: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["new_qingxian", "dcjuexiang"],
		dieAudios: ["jikang"],
	},
	dc_jsp_guanyu: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["new_rewusheng", "dcdanji"],
		dieAudios: ["jsp_guanyu"],
		tempname: ["jsp_guanyu"],
	},
	dc_mengda: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dclibang", "dcwujie"],
	},
	guānning: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["dcxiuwen", "longsong"],
	},
	sunhuan: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["dcniji"],
	},
	sunlang: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["dctingxian", "dcbenshi"],
	},
	shiyi: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["dccuichuan", "dczhengxu"],
	},
	dc_hujinding: {
		sex: "female",
		group: "shu",
		hp: 3,
		maxHp: 6,
		skills: ["dcdeshi", "dcwuyuan", "huaizi"],
	},
	liyixiejing: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["dcdouzhen"],
		names: "李|异-谢|旌",
	},
	mushun: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["dcjinjian", "dcshizhao"],
	},
	dc_zhaoyǎn: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["dcfuning", "dcbingji"],
	},
	wangwei: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["dcruizhan", "dcshilie"],
	},
	dc_huban: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dcchongyi"],
	},
	niufu: {
		sex: "male",
		group: "qun",
		hp: 4,
		maxHp: 7,
		skills: ["dcxiaoxi", "xiongrao"],
	},
	bianxi: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dunxi"],
	},
	fengfang: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["dcditing", "dcbihuo"],
	},
	qinyilu: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["piaoping", "tuoxian", "zhuili"],
	},
	yanrou: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["choutao", "xiangshu"],
	},
	dc_zhuling: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dczhanyi"],
	},
	licaiwei: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["yijiao", "qibie"],
		groupBorder: "wei",
	},
	yanfuren: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["channi", "nifu"],
		names: "严|null",
	},
	haomeng: {
		sex: "male",
		group: "qun",
		hp: 7,
		skills: ["xiongmang"],
	},
	re_pangdegong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["heqia", "yinyi"],
	},
	hanmeng: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jieliang", "quanjiu"],
	},
	xinping: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["fuyuan", "zhongjie", "yongdi"],
	},
	zhangning: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["tianze", "difa"],
	},
	tongyuan: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["chaofeng", "chuanshu"],
	},
	sp_mifangfushiren: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["fengshi"],
		names: "糜|芳-傅|士仁",
	},
	re_nanhualaoxian: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["gongxiu", "jinghe"],
		names: "庄|周",
	},
	dufuren: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["yise", "shunshi"],
		names: "杜|null",
	},
	caoanmin: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["xianwei"],
	},
	re_zoushi: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["rehuoshui", "reqingcheng"],
		names: "邹|null",
		dieAudios: ["zoushi"],
	},
	qiuliju: {
		sex: "male",
		group: "qun",
		hp: 4,
		maxHp: 6,
		skills: ["koulve", "qljsuiren"],
		names: "null|null",
	},
	re_hucheer: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["redaoji", "fuzhong"],
	},
	re_dongcheng: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xuezhao"],
	},
	tangji: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["kangge", "jielie"],
		names: "唐|null",
	},
	zhangheng: {
		sex: "male",
		group: "qun",
		hp: 8,
		skills: ["dangzai", "liangjue"],
	},
	duanwei: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["junklangmie"],
	},
	re_niujin: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["recuorui", "reliewei"],
	},
	zhangmiao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["mouni", "zongfan"],
	},
	liangxing: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["lulve", "lxzhuixi"],
	},
	caosong: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["cslilu", "csyizheng"],
	},
	re_taoqian: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["zhaohuo", "reyixiang", "reyirang"],
	},
	zhaozhong: {
		sex: "male",
		group: "qun",
		hp: 6,
		skills: ["yangzhong", "huangkong"],
	},
	hanfu: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["hfjieying", "weipo"],
	},
	re_quyi: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["refuqi", "jiaozi"],
		dieAudios: ["quyi"],
	},
	dongxie: {
		sex: "female",
		group: "qun",
		hp: 4,
		skills: ["dcjiaoxia", "dchumei"],
	},
	wangrong: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["minsi", "jijing", "zhuide"],
	},
	ol_dingyuan: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["cixiao", "xianshuai"],
	},
	re_hejin: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spmouzhu", "spyanhuo"],
		dieAudios: ["hejin"],
	},
	re_hansui: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spniluan", "spweiwu"],
		dieAudios: ["hansui"],
	},
	liuhong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["yujue", "tuxing"],
	},
	zhujun: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["gongjian", "kuimang"],
	},
	re_maliang: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["rexiemu", "heli"],
	},
	caobuxing: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["moying", "juanhui"],
	},
	lijue: {
		sex: "male",
		group: "qun",
		hp: 4,
		maxHp: 6,
		skills: ["xinfu_langxi", "xinfu_yisuan"],
	},
	zhangji: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinfu_lveming", "xinfu_tunjun"],
	},
	fanchou: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinxingluan"],
	},
	guosi: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinfu_tanbei", "xinfu_sidao"],
	},
	lvkai: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["xinfu_tunan", "xinfu_bijing"],
	},
	zhanggong: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["xinfu_zhenxing", "xinfu_qianxin"],
	},
	weiwenzhugezhi: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["xinfu_fuhai"],
		names: "卫|温-诸葛|直",
	},
	beimihu: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["zongkui", "guju", "baijia"],
		names: "null|null",
	},
	sp_liuqi: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["rewenji", "sptunjiang"],
	},
	xf_tangzi: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["xinfu_xingzhao"],
	},
	xf_huangquan: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["xinfu_dianhu", "xinfu_jianji"],
	},
	xf_sufei: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["xinfu_lianpian"],
	},
	xushao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["pingjian"],
	},
	xinpi: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["xpchijie", "yinju"],
	},
	lisu: {
		sex: "male",
		group: "qun",
		hp: 2,
		skills: ["lslixun", "lskuizhu"],
	},
	zhangwen: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["songshu", "sibian"],
	},
	mangyachang: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spjiedao"],
		names: "null|null",
	},
	xugong: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["biaozhao", "yechou"],
	},
	zhangchangpu: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["yanjiao", "xingshen"],
	},
	gaolan: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xiying"],
	},
	sp_shenpei: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["gangzhi", "beizhan"],
	},
	xunchen: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["fenglve", "mouzhi"],
		clans: ["颍川荀氏"],
	},
	sp_zhanghe: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["yuanlve"],
	},
	sp_xuyou: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["spshicai", "spfushi"],
	},
	chunyuqiong: {
		sex: "male",
		group: "qun",
		hp: 5,
		skills: ["cangchu", "sushou", "liangying"],
		names: "淳于|琼",
	},
	lvkuanglvxiang: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["liehou", "qigong"],
		names: "吕|旷-吕|翔",
	},

	duji: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["xinfu_andong", "xinfu_yingshi"],
	},
	liuyao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinfu_kannan", "twniju"],
		isZhugong: true,
	},
	lvdai: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["xinfu_qinguo"],
	},
	sp_taishici: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinfu_jixu"],
		names: "太史|慈",
	},
	re_zhangliang: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinfu_jijun", "xinfu_fangtong"],
	},
};

export default characters;
