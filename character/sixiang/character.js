const characters = {
	std_zhangyao: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["stdlianrong", "stdyuanzhuo"],
		names: "张|媱",
	},
	std_wangfuren: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["stdbizun", "stdhuangong"],
		names: "王|null",
	},
	std_panglin: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdzhuying", "stdzhongshi"],
	},
	std_huangchong: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdjuxian", "stdlijun"],
	},
	std_caoxiong: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdwuwei", "stdleiruo"],
	},
	std_maohuanghou: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["stddechong", "stdyinzu"],
		names: "毛|null",
	},
	std_zhengcong: {
		sex: "female",
		group: "qun",
		hp: 4,
		skills: ["stdqiyue", "stdjieji"],
	},
	std_jiangjie: {
		sex: "female",
		group: "qun",
		hp: 4,
		skills: ["stdfengzhan", "stdruixi"],
	},
	std_baoxin: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdyimou", "stdmutao"],
	},
	std_peixiu: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdzhitu"],
	},
	std_yangbiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdyizheng", "stdrangjie"],
	},
	std_huangfusong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdtaoluan"],
		names: "皇甫|嵩",
	},
	std_zerong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdcansi"],
	},
	std_pangdegong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdlingjian", "stdmingshi"],
	},
	std_nanhualaoxian: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdxianlu", "stdtianshu"],
		name: "null|null",
	},
	std_tianfeng: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdgangjian", "stdguijie"],
	},
	std_liuxie: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdtianming", "stdmizhao", "stdzhongyan"],
		isZhugong: true,
	},
	std_simazhao: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdzhaoxin"],
		names: "司马|昭",
	},
	std_guozhao: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["stdwufei", "stdjiaochong"],
	},
	std_jiakui: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdzhongzuo", "stdwanlan"],
	},
	std_yufan: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdzongxuan", "stdzhiyan"],
	},
	std_zhugeke: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdaocai", "stdduwu"],
		names: "诸葛|恪",
	},
	std_mengda: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdzhuan"],
	},
	std_caozhen: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdsidi"],
	},
	std_dongyun: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdbingzheng", "stdduliang"],
	},
	std_baosanniang: {
		sex: "female",
		group: "shu",
		hp: 3,
		skills: ["stdzhennan", "stdshuyong"],
	},
	std_liuba: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdduanbi"],
	},
	std_kongrong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdlirang"],
	},
	std_zoushi: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["stdhuoshui", "stdqingcheng"],
		names: "邹|null",
	},
	std_sunluyu: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["stdmumu", "stdmeibu"],
	},
	std_zhoufang: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdqijian", "stdyoudi"],
	},
	std_sunhao: {
		sex: "male",
		group: "wu",
		hp: 5,
		skills: ["stdcanshi", "chouhai", "guiming"],
		isZhugong: true,
	},
	std_mateng: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdxiongyi", "mashu", "stdyouji"],
		isZhugong: true,
	},
	std_mayunlu: {
		sex: "female",
		group: "shu",
		hp: 4,
		skills: ["stdfengpo", "mashu"],
	},
	std_jianggan: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stddaoshu", "stddaizui"],
	},
	std_zhouchu: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stdxiongxia"],
	},
	std_lvlingqi: {
		sex: "female",
		group: "qun",
		hp: 4,
		skills: ["stdhuizhan"],
	},
	std_dc_yanghu: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdmingfa"],
		groupBorder: "jin",
	},
	std_dc_luotong: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdjinjian", "stdrenzheng"],
	},
	std_lijue: {
		sex: "male",
		group: "qun",
		hp: 5,
		skills: ["stdxiongsuan"],
	},
	std_chengpu: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stdchunlao"],
	},
	std_db_wenyang: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdquedi"],
	},
	std_re_dengzhi: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdzhiyinmeng", "stdhehe"],
	},
	std_zhangyì: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdzhiyi"],
	},
	std_chengyu: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdshefu", "stdyibing"],
	},
	std_fanyufeng: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["stdbazhan", "stdzhanying"],
	},
	std_feiyi: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdtiaohe", "stdqiansu"],
	},

	std_guanxing: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdwuyou"],
	},
	std_fuhuanghou: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["stdqiuyuan", "stdzhuikong"],
	},
	std_liubiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdzishou", "zongshi", "stdjujin"],
		isZhugong: true,
	},
	std_gongsunyuan: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdhuaiyi", "stdfengbai"],
		names: "公孙|渊",
		isZhugong: true,
	},
	std_cenhun: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdjishe", "stdwudu"],
	},
	std_simashi: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdjinglve"],
		names: "司马|师",
		groupBorder: "jin",
	},
	std_sunshao: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stddingyi", "stdzuici"],
	},
	std_jiangwan: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdruwu", "stdchengshi"],
	},
	std_maliang: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdxiemu", "stdnaman"],
	},
	old_shen_zhaoyun: {
		sex: "male",
		group: "shen",
		hp: 2,
		skills: ["oldjuejing", "oldlonghun"],
		groupInGuozhan: "shu",
	},
	std_xushu: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["stdwuyan", "stdjujian"],
		groupBorder: "wei",
	},
	std_xuezong: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["stdfunan", "stdxunjie"],
	},
	std_liuzhang: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdyinge", "stdshiren", "stdjuyi"],
		isZhugong: true,
	},
	std_wangyuanji: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["stdqianchong", "stdshangjian"],
		groupBorder: "jin",
	},
	std_wanglang: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdgushe", "stdjici"],
	},
	std_zhonghui: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["stdxingfa"],
		clans: ["颍川钟氏"],
	},
	std_huaxin: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdyuanqing", "stdshuchen"],
	},

	std_zhangbao: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdjuezhu", "stdchengji"],
	},
	std_liuchen: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdzhanjue", "stdqinwang"],
		isZhugong: true,
	},
	std_guansuo: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdzhengnan"],
	},
	std_xiahouba: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["stdbaobian"],
		names: "夏侯|霸",
	},
	std_caorui: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdhuituo", "stdmingjian", "xingshuai"],
		isZhugong: true,
	},
	std_liuye: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["stdpolu", "stdchoulve"],
	},
	std_guohuanghou: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["stdjiaozhao", "stddanxin"],
		names: "郭|null",
	},
	std_lvfan: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["mbdiaodu", "stddianfeng"],
	},
	std_dingfeng: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stdduanbing", "stdfenxun"],
	},
	std_sunluban: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["stdzenhui", "stdchuyi"],
	},
	std_liuzan: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stdfenyin"],
	},
	std_sunyi: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["stdzaoli"],
	},
	std_taoqian: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdyirang"],
	},
	std_jiling: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["stdshuangdao"],
	},
	std_liru: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdmieji", "stdjuece"],
	},
	std_wangyun: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["stdyunji", "stdzongji"],
	},
};

export default characters;
