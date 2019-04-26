setTimeout(function(){
console.log("%c3"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:6em;line-height:60px;");
console.log("%c2"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:4em;line-height:60px;");
console.log("%c1"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em;line-height:60px;");
console.log('%c在线分享网欢迎您', 'color: #fff; background: #f40; font-size: 24px;border-radius:0 15px 15px 0;padding:10px;');
console.log("%c                                           ","background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;width:1px;height:40px;padding:2px;");
console.log("%c", "color:red;font-size:30px;font-weight:bolder;padding:50px 420px;line-height:10px;background:url('https://ws2.sinaimg.cn/large/006MOU0zly1g1ngog19ayg30jg0j6t9e.gif') repeat-x;background-size:contain;");
console.log("%c  ","line-height:50px;");},5000);
jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure': '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};
var wenkmList;
	if ((top.location != self.location)) {
		$("#wenkmPlayer").hide()
	} else {
		var audio = new Audio(),
			$player = $('#wenkmPlayer'),
			$tips = $('#wenkmTips'),
			$lk = $('#wenkmKsc,#wenkmLrc'),
			$player1 = $('.switch-player', $player),
			$btns = $('.status', $player),
			$songName = $('.song', $player),
			$cover = $('.cover', $player),
			$songTime = $(".time", $player),
			$songList=$('.song-list .list',$player);
			$albumList=$('.album-list',$player),
			$songFrom = $('.player .artist', $player),
			$songFrom1 = $('.player .artist1', $player),
			$songFrom2 = $('.player .moshi', $player),
			$songFrom3 = $('.player .geci', $player),
			$songFrom4 = $('.player .switch-ksclrc', $player),
			songFrom33 = '\u5f00\u542f',
			songFrom44 = '',
			roundcolor = '#6c6971',
			lightcolor = '#81c300',
			cur='current',
			files = '../music/',
			homeurl='https://free.limh.me',
			api= homeurl+'/api/',
			//user=homeurl+'/user/'+domain+'/',
			user=api+'/music.php?user='+domain,
			volume = $.cookie('myhk_player_volume') ? $.cookie('myhk_player_volume') : '.55',
			albumId = 0,
			songId = 0,
			songTotal = 0,
			showLrc = true,
			random = true,
			hasgeci = true,
			ycgeci = true,
			hasdefault = false,
			musicfirsttip = false;

		function wenkmCicle() {
			$songTime.text(formatSecond(audio.currentTime) + " / " + formatSecond(audio.duration));
			if (audio.currentTime < audio.duration / 2) {
				$btns.css('background-image', 'linear-gradient(90deg, ' + roundcolor + ' 50%, transparent 50%, transparent), linear-gradient(' + (90 + (270 - 90) / (audio.duration / 2) * audio.currentTime) + 'deg, ' + lightcolor + ' 50%, ' + roundcolor + ' 50%, ' + roundcolor + ')');
			} else {
				$btns.css('background-image', 'linear-gradient(' + (90 + (270 - 90) / (audio.duration / 2) * audio.currentTime) + 'deg, ' + lightcolor + ' 50%, transparent 50%, transparent), linear-gradient(270deg, ' + lightcolor + ' 50%, ' + roundcolor + ' 50%, ' + roundcolor + ')')
			}
		}

		function formatSecond(t) {
			return ("00" + Math.floor(t / 60)).substr(-2) + ":" + ("00" + Math.floor(t % 60)).substr(-2)
		}
		var cicleTime = null;
		$cover.html('<img src="https://avatars2.githubusercontent.com/u/49894775?s=460&v=4">');
		$songName.html('<a style="color:#f00">\u521d\u59cb\u5316\u5931\u8d25</a>');
		$songFrom.html('<a href="http://www.52share.online" title="\u5728\u7ebf\u5206\u4eab\u7f51" target="_blank" style="color:#f00">HuiProgramer</a>');
		$songFrom1.html('<a style="color:#f00">\u97f3\u4e50\u64ad\u653e\u5668</a>');
		$songFrom3.html('<i class="fa fa-times-circle"></i> \u6b4c\u8bcd\u672a\u8f7d\u5165');
		$player.css({
					background: 'rgba(52, 52, 52, 0.8)'
				});
				$player1.css({
					background: 'rgba(52, 52, 52, 0.8)'
				});
				$tips.css({
					background: 'rgba(52, 52, 52, 0.6)'
				});
				$lk.css({
					background: '#38343e'
				});
		var wenkmMedia = {
			play: function() {
				$player.addClass('playing');
				cicleTime = setInterval(wenkmCicle, 800);
				if (hasLrc) {
					lrcTime = setInterval(wenkmLrc.lrc.play, 500);
					$('#wenkmLrc').addClass('show');
					$(".switch-down").css("right", "65px");
					$(".switch-default").css("right", "95px");
					if (hasdefault) {
						setTimeout(function() {
							$(".switch-ksclrc").show()
						}, 300);
					} else {
						$(".switch-ksclrc").show()
					}
				}
				if (hasKsc) {
					kscTime = setInterval(wenkmLrc.ksc.play, 95);
					$('#wenkmKsc').addClass('showPlayer');
					$(".switch-down").css("right", "65px");
					$(".switch-default").css("right", "95px");
					if (hasdefault) {
						setTimeout(function() {
							$(".switch-ksclrc").show()
						}, 300);
					} else {
						$(".switch-ksclrc").show()
					}
				}
			},
			pause: function() {
				clearInterval(cicleTime);
				$player.removeClass('playing');
				$(".switch-ksclrc").hide();
				$(".switch-down").css("right", "35px");
				$(".switch-default").css("right", "65px");
				if (hasLrc) {
					wenkmLrc.lrc.hide();
				};
			},
			error: function() {
				clearInterval(cicleTime);
				$player.removeClass('playing');
				wenkmTips.show(wenkmList[albumId].song_name[songId].replace((songId+1)+'#','') + '\u0020\u002d\u0020\u8d44\u6e90\u83b7\u53d6\u5931\u8d25\uff01');
				setTimeout(function() {
					$cover.removeClass('coverplay')
				}, 1000);
				$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
			},
			seeking: function() {
				clearInterval(cicleTime);
				$player.removeClass('playing');
				wenkmTips.show('加载中...');
			},
			volumechange: function() {
				var vol = parseInt(audio.volume * 100);
				$('.volume-on', $player).width(vol + '%');
			},
			getInfos: function(id) {
				$cover.removeClass('coverplay');
				songId = id;
				if (wenkmList[albumId].song_id[songId].replace((songId+1)+'#','').indexOf('wy') >= 0) 
				{phpurl=api+'163mp3api.php';
				netmusic();
				}else{
					$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					wenkmTips.show(wenkmList[albumId].song_name[songId].replace((songId+1)+'#','') + '\u0020\u002d\u0020\u6b4c\u66f2\u0049\u0044\u586b\u5199\u9519\u8bef\uff0c\u81ea\u52a8\u64ad\u653e\u4e0b\u4e00\u66f2\uff01');
					audio.pause()
					$cover.html('<img src="https://avatars2.githubusercontent.com/u/49894775?s=460&v=4">');
		$songName.html('<a style="color:#f00">\u6b4c\u66f2\u0049\u0044\u9519\u8bef</a>');
		$songFrom.html('<a href="http://www.52share.online" title="\u660e\u6708\u6d69\u7a7a" target="_blank" style="color:#f00">HuiProgramer</a>');
		$songFrom1.html('<a style="color:#f00">\u97f3\u4e50\u64ad\u653e\u5668</a>');
		$songFrom3.html('<i class="fa fa-times-circle"></i> \u6b4c\u8bcd\u672a\u8f7d\u5165');
		setTimeout(function() {
			$('.next', $player).click()
			}, 1000);
		}
			},
			getSongId: function(n) {
				return n >= songTotal ? 0 : n < 0 ? songTotal - 1 : n;
			},
			next: function() {
				if (random) {
					wenkmMedia.getInfos(parseInt(Math.random() * songTotal))
				} else {
					wenkmMedia.getInfos(wenkmMedia.getSongId(songId + 1))
				}
			},
			prev: function() {
				if (random) {
					wenkmMedia.getInfos(parseInt(Math.random() * songTotal))
				} else {
					wenkmMedia.getInfos(wenkmMedia.getSongId(songId - 1))
				}
			}
		};

		var wenkmTipsTime = null;
		var wenkmTips = {
			show: function(cont) {
				clearTimeout(wenkmTipsTime);
				$('#wenkmTips').text(cont).addClass('show');
				this.hide();
			},
			hide: function() {
				wenkmTipsTime = setTimeout(function() {
					$('#wenkmTips').removeClass('show')
					if (musicfirsttip == false) {
						musicfirsttip = true;
					}
				}, 4000)
			}
		};

		audio.addEventListener('play', wenkmMedia.play, false);
		audio.addEventListener('pause', wenkmMedia.pause, false);
		audio.addEventListener('ended', wenkmMedia.next, false);
		audio.addEventListener('playing', wenkmMedia.playing, false);
		audio.addEventListener('volumechange', wenkmMedia.volumechange, false);
		audio.addEventListener('error', wenkmMedia.error, false);
		audio.addEventListener('seeking', wenkmMedia.seeking, false);

		//播放器开关
		$player1.click(function() {
			$player.toggleClass('show');
		});

		//播放交互
		$('.pause', $player).click(function() {
			hasgeci = false;
			if(!$('.list',$albumList).html()=='' && $('[data-album='+ albumId +']').length){
					//当前专辑的歌曲列表高亮当前项
					$('[data-album='+ albumId +']').find('li').eq(songId).addClass(cur).find('.artist').html('\u6682\u505c\u64ad\u653e&nbsp;>&nbsp;').parent().siblings().removeClass(cur).find('.artist').html('').parent();
				};
			wenkmTips.show('\u6682\u505c\u64ad\u653e\u0020\u002d\u0020' + wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''));
			$cover.removeClass('coverplay');
			audio.pause()
		});
		$('.play', $player).click(function() {
			hasgeci = true;
			$("#wenkmLrc,#wenkmKsc").show();
        if(!$('.list',$albumList).html()=='' && $('[data-album='+ albumId +']').length){
					//当前专辑的歌曲列表高亮当前项
					$('[data-album='+ albumId +']').find('li').eq(songId).addClass(cur).find('.artist').html('\u5f53\u524d\u64ad\u653e&nbsp;>&nbsp;').parent().siblings().removeClass(cur).find('.artist').html('').parent();
				};
			wenkmTips.show('\u5f00\u59cb\u64ad\u653e\u0020\u002d\u0020' + wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''));
			$cover.addClass('coverplay');
			audio.play()
		});
		$('.prev', $player).click(function() {
			hasgeci = true;
			$("#wenkmLrc,#wenkmKsc").show();
			wenkmMedia.prev()
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
		});
		$('.next', $player).click(function() {
			hasgeci = true;
			$("#wenkmLrc,#wenkmKsc").show();
			wenkmMedia.next()
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
		});
		$('.random', $player).click(function() {
			$(this).addClass(cur);
			$('.loop', $player).removeClass(cur);
			random = true;
			wenkmTips.show('\u968f\u673a\u64ad\u653e');
			$songFrom2.html('<i class="random fa fa-random current"></i> \u968f\u673a\u64ad\u653e');
		});
		$('.loop', $player).click(function() {
			$(this).addClass(cur);
			$('.random', $player).removeClass(cur);
			random = false;
			wenkmTips.show('\u987a\u5e8f\u64ad\u653e');
			$songFrom2.html('<i class="loop fa fa-retweet"></i> \u987a\u5e8f\u64ad\u653e');
		});
		//音量交互
		var $progress = $('.progress', $player);
		$progress.click(function(e) {
			var progressWidth = $progress.width(),
				progressOffsetLeft = $progress.offset().left;
			volume = (e.clientX - progressOffsetLeft) / progressWidth;
            $.cookie("myhk_player_volume", volume, {
			path: "/",
			expires: 0
		});
			audio.volume = volume;
		});
		var isDown = false;
		$('.drag', $progress).mousedown(function() {
			isDown = true;
			$('.volume-on', $progress).removeClass('ts5');
		});
		$(window).on({
			mousemove: function(e) {
				if (isDown) {
					var progressWidth = $progress.width(),
						progressOffsetLeft = $progress.offset().left,
						eClientX = e.clientX;
					if (eClientX >= progressOffsetLeft && eClientX <= progressOffsetLeft + progressWidth) {
						$('.volume-on', $progress).width((eClientX - progressOffsetLeft) / progressWidth * 100 + '%');
						volume = (eClientX - progressOffsetLeft) / progressWidth;
						audio.volume = volume;
					}
				}
			},
			mouseup: function() {
				isDown = false;
				$('.volume-on', $progress).addClass('ts5');
			}
		});
		//播放列表交互
$('.switch-playlist').click(function(){
	$player.toggleClass('showAlbumList')
});
$songList.mCustomScrollbar();
$('.song-list .musicheader,.song-list .fa-angle-right',$player).click(function(){
		$player.removeClass('showSongList');
	});
		$('.switch-ksclrc').click(function() {
			$player.toggleClass('ksclrc');
			$('#wenkmLrc').toggleClass('hide');
			$('#wenkmKsc').toggleClass('hidePlayer');
			if (!$('#wenkmLrc').hasClass('hide')) {
				ycgeci = true;
				if (hasLrc) {
					$songFrom3.html('<i class="fa fa-check-circle"></i> \u004c\u0072\u0063\u6b4c\u8bcd\u5f00\u542f');
				};
				if (hasKsc) {
					$songFrom3.html('<i class="fa fa-check-circle"></i> \u004b\u0073\u0063\u6b4c\u8bcd\u5f00\u542f');
				};
				wenkmTips.show('\u5f00\u542f\u6b4c\u8bcd\u663e\u793a');
				songFrom33 = '开启', $songFrom4.html('<i class="fa fa-toggle-on" title="\u5173\u95ed\u6b4c\u8bcd"></i>');
			} else {
				ycgeci = false;
				if (hasLrc) {
					$songFrom3.html('<i class="fa fa-times-circle"></i> \u004c\u0072\u0063\u6b4c\u8bcd\u5173\u95ed');
				};
				if (hasKsc) {
					$songFrom3.html('<i class="fa fa-times-circle"></i> \u004b\u0073\u0063\u6b4c\u8bcd\u5173\u95ed');
				};
				wenkmTips.show('\u6b4c\u8bcd\u663e\u793a\u5df2\u5173\u95ed');
				songFrom33 = '关闭', $songFrom4.html('<i class="fa fa-toggle-off" title="\u6253\u5f00\u6b4c\u8bcd"></i>');
			};
			musictooltip()
		});
		$('.switch-default').click(function() {
id = 0;
albumId = 0;
songId = 0;
songTotal = 0;
$player.removeClass('showSongList');
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
			$.ajax({
				url: user +'music.list',
				type: 'GET',
				dataType: 'script',
				success: function() {
				wenkmTips.show(wenkmList[albumId].song_album + '\u0020\u002d\u0020\u8f7d\u5165\u6210\u529f\u0021');
					$(".switch-default").hide();
					hasdefault = false;
					wenkmPlayer.playList.creat.album();
                    $('.play', $player).click();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					wenkmTips.show('\u6b4c\u66f2\u5217\u8868\u83b7\u53d6\u5931\u8d25\u0021');
					$(".switch-default").show()
				}
			});
		});
		//载入歌曲列表
$.ajax({
	url: user,
	type:'GET',
	dataType:'script',
	success:function(){
		wenkmPlayer.playList.creat.album();	
	},
	error:function(XMLHttpRequest, textStatus, errorThrown){
		wenkmTips.show('\u6b4c\u66f2\u5217\u8868\u83b7\u53d6\u5931\u8d25\u0021')
	}
});

wenkmPlayer.newplayList = {
	creat: {
		album: function(){
			var albumTotal=wenkmList.length, //专辑总数
				albumList='';
			//绑定专辑点击事件
				//得到当前专辑ID
				var id = 0;
			//获取歌曲总数
			songTotal=wenkmList[albumId].song_id.length;
		},
		song: function(id, isThisAlbum){
			songTotal=wenkmList[id].song_id.length; //歌曲总数
			var songList='';
			//头部信息
			$('.musicheader',$albumList).html(wenkmList[id].song_album + ' - '+wenkmList[id].song_album1 +'('+ songTotal +')');
			for(var i=0; i<songTotal; i++){
				songList += '<li><span class="index">'+ (i+1) +'</span>'+'<span class="artist"></span>' + wenkmList[id].song_name[i].replace((i+1)+'#','') +'</li>';
			};
			$('.list',$albumList).html('<ul>'+ songList +'</ul>').mCustomScrollbar();;
			//标记当前显示的专辑ID（高亮显示时有用）
			$albumList.attr('data-album',id);
			//更新滚动条
			$albumList.mCustomScrollbar('update');
			
			//绑定歌曲点击事件
			$('li',$albumList).click(function(){
				hasgeci = true;
				$("#wenkmLrc,#wenkmKsc").show();
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
				//专辑id变为当前歌曲所属的专辑id
				albumId = id;
				//已选播放状态禁止点击
				if($(this).hasClass(cur)){
				$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					wenkmTips.show('\u6b63\u5728\u64ad\u653e\u0020\u002d\u0020' + wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''));
				}else{
					//得到歌曲ID
					songId = $(this).index();
					//获取指定歌曲信息并尝试播放
					wenkmMedia.getInfos(songId);
				}
			});
		}
	}
};

wenkmPlayer.playList = {
	creat: {
		album: function(){
			var albumTotal=wenkmList.length, //专辑总数
				albumList='';
			//绑定专辑点击事件
				//得到当前专辑ID
				var id = 0;
				//生成当前专辑歌曲列表
					wenkmPlayer.playList.creat.song( id, true ); //第二个参数为是否是当前列表，以此判断获取的歌曲列表是否有高亮显示的情况
				//切换到歌曲列表

			//获取歌曲总数
			songTotal=wenkmList[albumId].song_id.length;
			//获取指定歌曲信息并尝试播放
			//wenkmMedia.getInfos(parseInt(Math.random() * songTotal));
			//setTimeout(function(){$cover.removeClass('coverplay');
			//audio.pause();},2000);
			//setTimeout(function(){wenkmTips.show('\u5df2\u4e3a\u60a8\u6682\u505c\u97f3\u4e50');},3000);
		},
		song: function(id, isThisAlbum){
			songTotal=wenkmList[id].song_id.length; //歌曲总数
			var songList='';
			//头部信息
			$('.musicheader',$albumList).html(wenkmList[id].song_album + ' - '+wenkmList[id].song_album1 +'('+ songTotal +')');
			for(var i=0; i<songTotal; i++){
				songList += '<li><span class="index">'+ (i+1) +'</span>'+'<span class="artist"></span>' + wenkmList[id].song_name[i].replace((i+1)+'#','') +'</li>';
			};
			$('.list',$albumList).html('<ul>'+ songList +'</ul>').mCustomScrollbar();;
			//标记当前显示的专辑ID（高亮显示时有用）
			$albumList.attr('data-album',id);
			//更新滚动条
			$albumList.mCustomScrollbar('update');
			
			//绑定歌曲点击事件
			$('li',$albumList).click(function(){
				hasgeci = true;
				$("#wenkmLrc,#wenkmKsc").show();
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
				//专辑id变为当前歌曲所属的专辑id
				albumId = id;
				//已选播放状态禁止点击
				if($(this).hasClass(cur)){
				$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					wenkmTips.show('\u6b63\u5728\u64ad\u653e\u0020\u002d\u0020' + wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''));
				}else{
					//得到歌曲ID
					songId = $(this).index();
					//获取指定歌曲信息并尝试播放
					wenkmMedia.getInfos(songId);
				}
			});
		}
	}
};


		//歌词
		var hasLrc = false,
			//是否有lrc歌词
			hasKsc = false,
			//是否有ksc歌词
			kscLineNow1 = false,
			//是否执行到第1行
			kscLineNow2 = false,
			//是否执行到第2行
			lrcTimeLine = [],
			lrcHeight = $('#wenkmLrc').height(),
			lrcTime = null,
			kscTime = null,
			letterTime1 = null,
			letterTime2 = null,
			lrcCont = '',
			kscCont = '',
			tempNum1 = 0,
			tempNum2 = 0;
		var wenkmLrc = {
			load: function() {
				wenkmLrc.lrc.hide();
				hasLrc = false;
				hasKsc = false;
				$('#wenkmLrc,#wenkmKsc').html('');
				setTimeout(function() {
					if (hasgeci) {
					$songFrom3.html('<i class="fa fa-check-circle"></i> \u004c\u0072\u0063\u6b4c\u8bcd' + songFrom33);
					} else {
					$songFrom3.html('<i class="fa fa-times-circle"></i> \u004c\u0072\u0063\u6b4c\u8bcd' + songFrom33);
					};
					$(".switch-down").css("right", "65px");
					$(".switch-default").css("right", "95px");
					if (hasdefault) {
						setTimeout(function() {
							$(".switch-ksclrc").show()
						}, 300);
					} else {
						$(".switch-ksclrc").show()
					}
						//如果是网易
						$.ajax({
						url:lrcurl,
						type:'GET',
						dataType:'script',
						data:{userurl:location.hostname},
						success: function() {
							if(typeof(cont)=='undefined'){
								songFrom44 = '\u0020\u002d\u0020\u6682\u65e0\u6b4c\u8bcd\u0021', $songFrom3.html('<i class="fa fa-times-circle"></i> \u6682\u65e0\u6b4c\u8bcd');
							$(".switch-ksclrc").hide();
							$(".switch-down").css("right", "35px");
							$(".switch-default").css("right", "65px");}else{
							if (cont.indexOf('[00') >= 0) {
							setTimeout(function() {
								if (!$('#wenkmLrc').hasClass('hide')) {
									songFrom44 = '\u0020\u002d\u0020\u004c\u0072\u0063\u6b4c\u8bcd\u83b7\u53d6\u6210\u529f\u0021'
								} else {
									songFrom44 = '\u0020\u002d\u0020\u004c\u0072\u0063\u6b4c\u8bcd\u5df2\u5173\u95ed\uff01'
								};
								wenkmLrc.lrc.format(cont);
							}, 500);}else{songFrom44 = '\u0020\u002d\u0020\u6682\u65e0\u6b4c\u8bcd\u0021', $songFrom3.html('<i class="fa fa-times-circle"></i> \u6682\u65e0\u6b4c\u8bcd');
							$(".switch-ksclrc").hide();
							$(".switch-down").css("right", "35px");
							$(".switch-default").css("right", "65px");}}
						}
					})
						}, 500);
			},
			lrc: {
				format: function(cont) {
					hasLrc = true;
					function formatTime(t) {
						var sp = t.split(':'),
							min = +sp[0],
							sec = +sp[1].split('.')[0],
							ksec = +sp[1].split('.')[1];
						return min * 60 + sec + Math.round(ksec / 1000);
					};
					var lrcCont = cont.replace(/\[[A-Za-z]+:(.*?)]/g, '').replace('\\n', '').split(/[\]\[]/g),
						lrcLine = '';
					lrcTimeLine = [];
					for (var i = 1; i < lrcCont.length; i += 2) {
						var timer = formatTime(lrcCont[i]);
						lrcTimeLine.push(timer);
						if (i == 1) {
							lrcLine += '<li class="wenkmLrc' + timer + ' current">' + lrcCont[i + 1] + '</li>'
						} else {
							lrcLine += '<li class="wenkmLrc' + timer + '">' + lrcCont[i + 1] + '</li>'
						}
					}
					$('#wenkmLrc').html('<ul>' + lrcLine + '</ul>');
					setTimeout(function() {
						$('#wenkmLrc').addClass('show');
					}, 500);
					lrcTime = setInterval(wenkmLrc.lrc.play, 500)
				},
				play: function() {
					var timeNow = Math.round(audio.currentTime);
					if ($.inArray(timeNow, lrcTimeLine) > 0) {
						var $lineNow = $('.wenkmLrc' + timeNow);
						if (!$lineNow.hasClass(cur)) {
							$lineNow.addClass(cur).siblings().removeClass(cur);
							$('#wenkmLrc').animate({
								scrollTop: lrcHeight * $lineNow.index()
							})
						}
					}else{
						lrcCont = '';
					}
				},
				hide: function() {
					clearInterval(lrcTime);
					$('#wenkmLrc').removeClass('show');
				}
			}
		}
	};
function LimitStr(str, num, t) {
	num = num || 6;
	//限制字符数默认为9个，注意，两个英文字符，算一个！！！
	t = t || '...';
	//默认在末尾加上省略号
	var re = '';
	var leg = str.length;
	var h = 0;
	for (var i = 0; h < num * 2 && i < leg; i++) {
		h += str.charCodeAt(i) > 128 ? 2 : 1;
		re += str.charAt(i);
	}
	if (i < leg) re += t;
	return re;
}

function netmusic() {
$.ajax({
				url:phpurl,
				dataType:'jsonp',
				type:'GET',
				data:{id:wenkmList[albumId].song_id[songId].replace((songId+1)+'#','').replace('wy','').replace('xm',''), userurl:location.hostname},
				success:function(infos){
					audio.src=infos.location;
					lrcurl=api+'163lrcapi.php?lrc='+wenkmList[albumId].song_id[songId].replace((songId+1)+'#','').replace('wy','')
				//歌曲名称
				$songName.html('<span title="'+wenkmList[albumId].song_name[songId].replace((songId+1)+'#','')+'">'+LimitStr(wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''))+'</span>');
				//歌手及专辑
				$songFrom.html('<span title="'+infos.artist_name+'">'+LimitStr(infos.artist_name)+'</span>');
				$songFrom1.html('<span title="'+infos.album_name+'">'+LimitStr(infos.album_name)+'</span>');
				//$songFrom1.text(infos.album_name);
				allmusic();
				//封面图案
				var coverImg = new Image();
				coverImg.src = infos.album_cover;
				$cover.addClass('changing');
				coverImg.onload = function() {
					setTimeout(function() {
						$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					}, 800);
					setTimeout(function() {
						$cover.removeClass('changing');
					}, 100);$.ajax({
						url:api+'colorapi.php',
						type:'GET',
						dataType:'script',
						data:{url:coverImg.src, userurl:location.hostname},
						success: function() {
							playercolor()
						},
						error: function() {
							var cont ='0,0,0';
							playercolor()
					}})
				};
				coverImg.error = function() {
					setTimeout(function() {
						$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					}, 800);
					coverImg.src = "https://avatars2.githubusercontent.com/u/49894775?s=460&v=4";
					setTimeout(function() {
						wenkmTips.show(wenkmList[albumId].song_name[songId].replace((songId+1)+'#','') + '\u0020\u002d\u0020\u4e13\u8f91\u56fe\u7247\u83b7\u53d6\u5931\u8d25\uff01');
					}, 4000);
				};
				$cover.html(coverImg);
				//设置音量
				audio.volume = volume;
		wenkmTips.show('\u5f00\u59cb\u64ad\u653e\u0020\u002d\u0020' + wenkmList[albumId].song_name[songId].replace((songId+1)+'#',''));
		//开始播放
		playPromise = audio.play();
		if (playPromise) {
			playPromise.then(() => {
				// 音频加载成功
				// 音频的播放需要耗时
				var t = audio.duration;
				console.log(name+' - https://www.52share.online - '+domain+'\u0020\u002d\u0020\u5f53\u524d\u64ad\u653e\uff1a'+wenkmList[albumId].song_name[songId].replace((songId+1)+'#','') + ' - ' + infos.artist_name+'\u0020\u65f6\u957f\uff1a'+Math.floor(t/60)+":"+(t%60/100).toFixed(2).slice(-2));
			}).catch((e) => {
				// 音频加载失败
				console.log("\u6d4f\u89c8\u5668\u9650\u5236\u81ea\u52a8\u64ad\u653e\uff0c\u9700\u8981\u70b9\u51fb\u64ad\u653e\uff01");
			});
		}
		//获取LRC
		$cover.addClass('coverplay')
wenkmLrc.load();
			},error:function(a,b,c){
				setTimeout(function() {
						$(".myhk_pjax_loading_frame,.myhk_pjax_loading").hide();
					}, 800);
					setTimeout(function() {
						wenkmTips.show('\u97f3\u4e50\u64ad\u653e\u5668\u52a0\u8f7d\u5931\u8d25\uff01');
					}, 4000);
			}})
			}
function allmusic(){
musictooltip()
				//如果歌曲列表内容不为空（因为初始化时歌曲列表为空的会报错）且歌曲列表为播放的专辑时
				if(!$('.list',$albumList).html()=='' && $('[data-album='+ albumId +']').length){
					//当前专辑的歌曲列表高亮当前项
					$('[data-album='+ albumId +']').find('li').eq(songId).addClass(cur).find('.artist').html('\u5f53\u524d\u64ad\u653e&nbsp;>&nbsp;').parent().siblings().removeClass(cur).find('.artist').html('').parent();
					//重置滚动条让高亮项居中
					$('.list',$albumList).mCustomScrollbar('scrollTo', ($('li.current',$albumList).position().top)-120);
				};
}
function playercolor(){
$player.css({
					background: 'rgba(' + cont + ',.8)'
				});
				$player1.css({
					background: 'rgba(' + cont + ',.3)'
				});
				$tips.css({
					background: 'rgba(' + cont + ',.6)'
				});
				$lk.css({
					background: 'rgba(' + cont + ',.3)'
				});
}
function music(albums,ids) {
	$("#wenkmLrc,#wenkmKsc").show();
albumId = (albums-1);
$player.removeClass('showSongList');
			$(".myhk_pjax_loading_frame,.myhk_pjax_loading").show();
			$.ajax({
				url: user +'music.list',
				type: 'GET',
				dataType: 'script',
				success: function() {
					$(".switch-default").hide();
					hasdefault = false;
					wenkmPlayer.newplayList.creat.album();	
                    wenkmMedia.getInfos(ids-1);
                    $('.play', $player).click();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					wenkmTips.show('\u6b4c\u66f2\u5217\u8868\u83b7\u53d6\u5931\u8d25\u0021');
					$(".switch-default").show()
				}
			});
}
function musictooltip() {
	$("#wenkmPlayer span,#wenkmPlayer i").each(function() {
		$("#tooltip").remove();
		if (this.title) {
			var a = this.title;
			$(this).mouseover(function(b) {
				this.title = "";
				$("body").append('<div id="tooltip">' + a + "</div>");
				$("#tooltip").css({
					left: b.pageX - 15 + "px",
					top: b.pageY + 30 + "px",
					opacity: "0.8"
				}).fadeIn(250)
			}).mouseout(function() {
				this.title = a;
				$("#tooltip").remove()
			}).mousemove(function(b) {
				$("#tooltip").css({
					left: b.pageX - 15 + "px",
					top: b.pageY + 30 + "px"
				})
			})
		}
	})
}
function b2top(a, b, d) {
	if (10 >= b && 0 <= b) {
		var e = 100 * b;
		$(a).css({
			backgroundPosition: "0 -" + e + "px"
		});
		setTimeout("b2top('" + a + "'," + (d ? b + 1 : b - 1) + "," + d + ")", 50)
	}
}
$(document).ready(function() {
	$(window).keydown(function(event) {
		var key = event.keyCode;
		//console.log(key);
		if (key == 192) {
			auto='';
			if (audio.paused) {
				$('.play', $player).click();
			} else {
				$('.pause', $player).click();
			}
		}
	});
	$(window).scroll(function() {
		500 < $(this).scrollTop() ? $(".backtop,.link-back2top").fadeIn() : $(".backtop,.link-back2top").fadeOut()
	});
	$(".backtop").hover(function() {
		b2top(".backtop", 0, !0)
	}, function() {
		b2top(".backtop", 3)
	}).click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 600, function() {});
		b2top(".backtop", 3)
	});
});
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	var scrollHeight = $(document).height();
	var windowHeight = $(this).height();
	if (scrollTop + windowHeight == scrollHeight) {
		if (hasgeci) {
			if (ycgeci) {
				$player.addClass('ksclrc');
				$('#wenkmLrc').addClass('hide');
				$('#wenkmKsc').addClass('hidePlayer');
				$songFrom3.html('<i class="fa fa-times-circle"></i> \u6b4c\u8bcd\u6682\u65f6\u9690\u85cf');
				$songFrom4.html('<i class="fa fa-toggle-off" title="\u6b4c\u8bcd\u6682\u65f6\u9690\u85cf"></i>');

				if (hasLrc) {
					wenkmTips.show("\u004c\u0072\u0063\u6b4c\u8bcd\u81ea\u52a8\u9690\u85cf");
				};
				if (hasKsc) {
					wenkmTips.show("\u004b\u0073\u0063\u6b4c\u8bcd\u81ea\u52a8\u9690\u85cf");
				};
			}
		}
	} else {
		if (hasgeci) {
			if (ycgeci) {
				$player.removeClass('ksclrc');
				$('#wenkmLrc').removeClass('hide');
				$('#wenkmKsc').removeClass('hidePlayer');
				if (hasLrc) {
					$songFrom3.html('<i class="fa fa-check-circle"></i> \u004c\u0072\u0063\u6b4c\u8bcd\u5f00\u542f');
				};
				if (hasKsc) {
					$songFrom3.html('<i class="fa fa-check-circle"></i> \u004b\u0073\u0063\u6b4c\u8bcd\u5f00\u542f');
				};
				$songFrom4.html('<i class="fa fa-toggle-on" title="\u5173\u95ed\u6b4c\u8bcd"></i>');
			}
		}
	}
	musictooltip()
});