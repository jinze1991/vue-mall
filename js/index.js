
var vm = new Vue({
	el:".container",
	data:{
		currentIndex:0,
		navList:[],
		mainSwiper:[
			{imgURL:'images/ad_1.png'},
			{imgURL:'images/ad_1.png'},
			{imgURL:'images/ad_1.png'},
			{imgURL:'images/ad_1.png'},
			{imgURL:'images/ad_1.png'},
			{imgURL:'images/ad_1.png'},
		],
		categoryIndex:0,
		categoryList:[
			{
				categoryName:'时尚服饰',
			},
			{
				categoryName:'时尚配件',
			},
			{
				categoryName:'美妆',
			},
			{
				categoryName:'儿童',
			},
			{
				categoryName:'运动',
			},
			{
				categoryName:'时尚',
			}
		],
		bestList:[],
		limitNum:3,
		brandList:[
			{
	        "brandName":"brand logo1",
	        "parts":[
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"}
		        ]
	      },
	      {
	        "brandName":"brand logo2",
	        "parts":[
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"}
		        ]
	      },
	      {
	        "brandName":"brand logo3",
	        "parts":[
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"}
		        ]
	      },
	      {
	        "brandName":"brand logo4",
	        "parts":[
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"},
		        	{"imgURL":"images/resort_1.png"}
		        ]
	      }
		],
		recommendList:[
			{
				"imgURL":"images/list_2.png",
				"productName":"品牌名称卸妆水商品系列500ml/每人限购4个 限量",
				"price":56000,
				"dc":7
			},
			{
				"imgURL":"images/list_2.png",
				"productName":"品牌名称卸妆水商品系列500ml/每人限购4个 限量",
				"price":56000,
				"dc":7
			},
			{
				"imgURL":"images/list_2.png",
				"productName":"品牌名称卸妆水商品系列500ml/每人限购4个 限量",
				"price":56000,
				"dc":7
			},
			{
				"imgURL":"images/list_2.png",
				"productName":"品牌名称卸妆水商品系列500ml/每人限购4个 限量",
				"price":56000,
				"dc":7
			},
			{
				"imgURL":"images/list_2.png",
				"productName":"品牌名称卸妆水商品系列500ml/每人限购4个 限量",
				"price":56000,
				"dc":7
			},
		],

		/* brand */
		brandNavIdx:0,
		brandNav:[
			{"navName":"周人气"},
			{"navName":"收藏顺序"},
			{"navName":"销量顺序"}
		],	
	},
	mounted:function(){
			this.$nextTick(function(){
				this.getNavList();
				this.getBestList();
				
			});
	},
	computed:{
		filterBest:function(){
			return this.bestList.slice(0,this.limitNum);
		}	
	},
	methods:{
			getNavList:function(){
				var _this = this;
				this.$http.get("data/nav.json").then(function(res){
					this.navList = res.body.result.list;
				});
			},
			getBestList:function(){
				var _this = this;
				this.$http.get("data/bestlist.json").then(function(res){
					this.bestList = res.body.result.list;
				});
			},
			tap_category:function(){
				this.currentIndex.imgURL=this.imgOn;
			}	
	}
});
Vue.filter("money",function(value){
	return parseInt(value).toLocaleString();

})



			
		