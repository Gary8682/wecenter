var AW_TEMPLATE = {
	'userCard':
			'<div id="aw-card-tips" class="aw-card-tips aw-card-tips-user">'+
				'<div class="aw-mod">'+
					'<div class="aw-mod-head">'+
						'<a href="{{url}}" class="aw-head-img">'+
							'<img src="{{avatar_file}}" alt="" />'+
						'</a>'+
						'<p class="title">'+
							'<a href="{{url}}" class="name" data-id="{{uid}}">{{user_name}}</a>'+
							'<i class="aw-icon i-v"></i>'+
						'</p>'+
						'<p class="aw-user-center-follow-meta">'+
							'<span>' + _t('威望') + ': <em class="aw-text-color-green">{{reputation}}</em></span>'+
							'<span>' + _t('赞同') + ': <em class="aw-text-color-oragne">{{agree_count}}</em></span>'+
						'</p>'+
					'</div>'+
					'<div class="aw-mod-body">'+
						'<p>{{signature}}</p>'+
					'</div>'+
					'<div class="aw-mod-footer">'+
						'<span class="pull-right">'+
							'<a href="javascript:;" onclick="$.dialog(\'inbox\', \'{{user_name}}\');">' + _t('私信') + '</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="$.dialog(\'publish\', {category_enable:{{category_enable}}, ask_user_id:{{uid}}});">' + _t('问Ta') + '</a>'+
						'</span>'+
						'<a class="btn btn-mini focus {{focus}}" onclick="follow_people($(this), {{uid}});">{{focusTxt}}</a>'+
					'</div>'+
				'</div>'+
			'</div>',
	
	'topicCard' : 
			'<div id="aw-card-tips" class="aw-card-tips aw-card-tips-topic">'+
				'<div class="aw-mod">'+
					'<div class="aw-mod-head">'+
						'<a href="{{url}}" class="aw-head-img">'+
							'<img src="{{topic_pic}}" alt="" title=""/>'+
						'</a>'+
						'<p class="title">'+
							'<a href="{{url}}" class="name" data-id="{{topic_id}}">{{topic_title}}</a>'+
						'</p>'+
						'<p>'+
							'{{topic_description}}'+
						'</p>'+
					'</div>'+
					'<div class="aw-mod-footer">'+
						'<span class="pull-right">'+
							_t('问题数') + ' {{discuss_count}} • ' + _t('关注者') + ' {{focus_count}}'+
						'</span>'+
						'<a class="btn btn-mini focus {{focus}}" onclick="focus_topic($(this), {{topic_id}});">{{focusTxt}}</a>'+
					'</div>'+
				'</div>'+
			'</div>',

	'alertBox' : 
			'<div class="modal hide fade alert-box aw-tips-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('提示信息') + '</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<p><i class="aw-icon i-warmming pull-left"></i>{{message}}</p>'+
				'</div>'+
			'</div>',

	'imagevideoBox' : 
			'<div id="aw-image-box" class="modal alert-box aw-image-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">{{title}}</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<form id="addTxtForms">'+
						'<p>' + _t('链接地址') + '</p>'+
						'<input type="text" value="http://" name="{{url}}" />'+
						'<p>' + _t('文字说明') + ':</p>'+
						'<input type="text" name="{{tips}}"/>'+
					'</form>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<a data-dismiss="modal" aria-hidden="true" class="closeBox">' + _t('取消') + '</a>'+
					'<button class="btn btn-large btn-success" data-dismiss="modal" aria-hidden="true" onclick="$.{{add_func}}($.{{add_func}});">' + _t('确定') + '</button>'+
				'</div>'+
			'</div>',

	'editCommentBox' : 
				'<div class="modal hide fade alert-box aw-edit-comment-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('编辑回复') + '</h3>'+
				'</div>'+
				'<form action="' + G_BASE_URL + '/question/ajax/update_answer/answer_id-{{answer_id}}" method="post" onsubmit="return false" id="answer_edit">'+
				'<div class="modal-body">'+
					'<input type="hidden" name="attach_access_key" value="{{attach_access_key}}" />'+
					'<textarea name="answer_content" id="editor_reply"></textarea>'+
					'<div class="aw-file-upload-box">'+
						'<span id="file_uploader_answer_edit"></span>'+
					'</div>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<span><input id="aw-do-delete" type="checkbox" value="1" name="do_delete" /><label for="aw-do-delete">' + _t('删除回复') + '</label></span>'+
					'<button class="btn btn-large btn-success" onclick="ajax_post($(\'#answer_edit\'), _ajax_post_alert_processer);return false;">' + _t('确定') + '</button>'+
				'</div>'+
				'</form>'+
			'</div>',

	'favoriteBox' : 
			'<div class="modal hide fade alert-box aw-favorite-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('收藏') + '</h3>'+
				'</div>'+
				'<form action="' + G_BASE_URL + '/favorite/ajax/update_favorite_tag/" method="post" onsubmit="return false;">'+
				'<input type="hidden" name="answer_id" value="{{answer_id}}" />'+
				'<div class="modal-body">'+
					'<p>' + _t('添加话题标签') + ': <input type="text" name="tags" id="add_favorite_tags" /></p>'+
					'<p id="add_favorite_my_tags" class="hide">' + _t('常用标签') + ': </p>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<a href="javascript:;" data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
					'<a href="javascript:;" class="btn btn-large btn-success" onclick="ajax_post($(this).parents(\'form\'), _ajax_post_modal_processer);">' + _t('确认') + '</a>'+
				'</div>'+
				'</form>'+
			'</div>',

	'questionRedirect' : 
			'<div class="modal hide fade alert-box aw-question-redirect-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('问题重定向至') + '</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<p>' + _t('将问题重定向至') + '</p>'+
					'<div class="aw-question-drodpwon">'+
						'<input id="question-input" type="text" data-id="{{data_id}}" onkeyup="get_question_list_data($(this).val())" onblur="hide_question_list($(this))" placeholder="' + _t('搜索问题') + '" />'+
						'<div class="aw-dropdown aw-topic-dropdown"><i class="aw-icon i-dropdown-triangle active"></i><p class="title">' + _t('没有找到相关结果') + '</p><ul class="aw-question-dropdown-list"></ul></div>'+
					'</div>'+
					'<p class="clearfix"><a href="javascript:;" class="btn btn-mini pull-right" onclick="$(\'.alert-box\').modal(\'hide\');">' + _t('放弃操作') + '</a></p>'+
				'</div>'+
			'</div>',

	'publishBox' : 
			'<div class="modal hide fade alert-box aw-publish-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('发起问题') + '</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<div id="quick_publish_error" class="error-message alert  alert-error hide"><em></em></div>'+
					'<form action="' + G_BASE_URL + '/publish/ajax/publish_question/" method="post" id="quick_publish" onsubmit="return false">'+
						'<input type="hidden" id="quick_publish_category_id" name="category_id" value="{{category_id}}" />'+
						'<input type="hidden" name="post_hash" value="' + G_POST_HASH + '" />'+
						'<input type="hidden" name="ask_user_id" value="{{ask_user_id}}" />'+
						'<textarea placeholder="' + _t('写下你的问题') + '..." name="question_content" onkeydown="if (event.keyCode == 13) { return false; }" onkeyup="get_quick_publich_question_list($(this),$(this).val());" onblur="hide_quick_publish_question_list($(this));"></textarea>'+
						'<div class="aw-dropdown aw-topic-dropdown">'+
							'<i class="aw-icon i-dropdown-triangle active"></i>'+
							'<p class="title">没有找到相关结果</p>'+
							'<ul class="aw-question-dropdown-list"></ul>'+
						'</div>'+
						//'<p onclick="$(this).parents(\'form\').find(\'.aw-publish-box-supplement-content\').fadeIn().focus();$(this).hide();"><span class="aw-publish-box-supplement"><i class="aw-icon i-edit"></i>' + _t('补充说明') + ' »</span></p>'+
						'<textarea name="question_detail" class="aw-publish-box-supplement-content" placeholder="' + _t('问题背景、条件等详细信息') + '..."></textarea>'+
						'<div class="aw-publish-title-dropdown" id="quick_publish_category_chooser">'+
							'<p class="dropdown-toggle" data-toggle="dropdown">'+
								'<span id="aw-topic-tags-select">' + _t('选择分类') + '</span>'+
								'<a><i class="aw-icon i-triangle-down"></i></a>'+
							'</p>'+
						'</div>'+
						'<div class="clearfix hide" id="quick_publish_captcha">'+
							'<input type="text" class="pull-left" name="" placeholder="' + _t('验证码') + '" />'+
							'<img id="captcha" name="seccode_verify" class="pull-left" onclick="this.src = \'' +G_BASE_URL + '/account/captcha/\' + Math.floor(Math.random() * 10000);" src="" />'+
						'</div>'+
						'<p id="quick_publish_topic_chooser">'+
							'<span class="aw-topic-editor" data-type="publish">'+
							'<span class="aw-edit-topic"><i class="aw-icon i-edit"></i>' + _t('编辑话题') + '</span>'+
							'</span>'+
						'</p>'+
					'</form>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<a href="javascript:;" tabindex="-1" onclick="$(\'form#quick_publish\').attr(\'action\', \'' + G_BASE_URL + '/publish/\');document.getElementById(\'quick_publish\').submit();" class="pull-left">' + _t('高级模式') + '</a>'+
					'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
					'<button class="btn btn-large btn-success" onclick="ajax_post($(\'#quick_publish\'), _quick_publish_processer);">' + _t('发起') + '</button>'+
				'</div>'+
			'</div>',

	'inbox' :
			'<div class="modal hide fade alert-box aw-inbox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('新私信') + '</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<div id="quick_publish_error" class="error-message alert  alert-error hide"><em></em></div>'+
					'<form action="' + G_BASE_URL + '/inbox/ajax/send/" method="post" id="quick_publish" onsubmit="return false">'+
						'<input class="input" type="text" onkeyup="get_user_list_data($(this),$(this).val())" onblur="hide_user_list($(this))" placeholder="' + _t('搜索用户') + '" name="recipient" value="{{recipient}}" />'+
						'<div class="aw-dropdown aw-user-dropdown">'+
							'<i class="aw-icon i-dropdown-triangle"></i>'+
							'<p class="title">' + _t('没有找到相关结果') + '</p>'+
							'<ul class="aw-user-dropdown-list">'+
							'</ul>'+
						'</div>'+
						'<textarea name="message"></textarea>'+
					'</form>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
					'<button class="btn btn-large btn-success" onclick="ajax_post($(\'#quick_publish\'), _quick_publish_processer);">' + _t('发送') + '</button>'+
				'</div>'+
			'</div>',

	'shareBox' : 
			'<div class="modal hide fade alert-box aw-share-box aw-share-box-message" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('分享答案') + '</h3>'+
					'<p class="aw-share-box-tabs">'+
						'<a class="shareOut"><i class="aw-icon i-share-user"></i>' + _t('站外') + '</a>'+
						'<a class="shareIn"><i class="aw-icon i-message"></i>' + _t('私信') + '</a>'+
					'</p>'+
				'</div>'+
				
				'<div class="aw-share-box-tabs-content  clearfix">'+
					'<div class="aw-item hide">'+
						'<div class="modal-body  clearfix">'+
							'<ul id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">'+
							'{{#items}}'+
								'<li><a title="' + _t('分享到') + ' {{title}}"><i class="bds {{className}}"></i>{{name}}</a></li>'+
							'{{/items}}'+
							'</ul>'+
							'<script type="text/javascript" src="http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=' + new Date().getHours() + '"></script>'+
						'</div>'+
					'</div>'+
					'<div class="aw-item hide">'+
						'<div class="modal-body  clearfix">'+
							'<div id="quick_publish_error" class="error-message alert alert-error hide"><em></em></div>'+
							'<form onsubmit="return false" id="quick_publish" method="post" action="' + G_BASE_URL +'/inbox/ajax/send/">'+
								'<input type="text" class="input" name="recipient" onkeyup="get_user_list_data($(this),$(this).val())" onblur="hide_user_list($(this))" placeholder="' + _t('搜索用户') + '" />'+
								'<div class="aw-dropdown aw-user-dropdown">'+
									'<i class="aw-icon i-dropdown-triangle"></i>'+
									'<p class="title">' + _t('没有找到相关结果') + '</p>'+
									'<ul class="aw-user-dropdown-list"></ul>'+
								'</div>'+
								'<textarea name="message" id="share_out_content"></textarea>'+
							'</form>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
							'<button class="btn btn-large btn-success" onclick="ajax_post($(\'#quick_publish\'), _quick_publish_processer); return false;">' + _t('发送') + '</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',
		
	'shareList' : [ //分享外网icon列表
		{'className':'bds-qzone','name':'QQ空间','title':'QQ空间'},
		{'className':'bds-tsina','name':'新浪微博','title':'新浪微博'},
		{'className':'bds-tqq','name':'腾讯微博','title':'腾讯微博'},
		{'className':'bds-baidu-zone','name':'百度空间','title':'百度空间'},
		{'className':'bds-t163','name':'网易微博','title':'网易微博'},
		{'className':'bds-tqf','name':'朋友网','title':'朋友网'},
		{'className':'bds-kaixin','name':'开心网','title':'开心网'},
		{'className':'bds-renren','name':'人人网','title':'人人网'},
		{'className':'bds-douban','name':'豆瓣网','title':'人人网'},
		{'className':'bds-taobao','name':'淘宝网','title':'淘宝网'},
		{'className':'bds-fbook','name':'Facebook','title':'Facebook'},
		{'className':'bds-twi','name':'Twitter','title':'Twitter'},
		{'className':'bds-ms','name':'Myspace','title':'Myspace'},
		{'className':'bds-deli','name':'Delicious','title':'Delicious'},
		{'className':'bds-linkedin','name':'linkedin','title':'linkedin'}
	],
	
	'editTopicBox' : 
			'<div class="aw-edit-topic-box">'+
				'<input type="text" id="aw_edit_topic_title" onkeyup="get_topic_list_data($(this).val())" onblur="hide_topic_list()"  placeholder="' + _t('创建或搜索添加新话题') + '...">'+
				'<a class="btn btn-mini btn-success submit-edit">' + _t('添加') + ' »</a>'+
				'<a class="btn btn-mini close-edit">' + _t('取消') + '</a>'+
				'<div class="aw-dropdown aw-topic-dropdown">'+
					'<i class="aw-icon i-dropdown-triangle active"></i>'+
					'<p class="title">' + _t('没有找到相关结果') + '</p>'+
					'<ul class="aw-topic-dropdown-list">'+
					'</ul>'+
				'</div>'+
			'</div>',
			
	'topicEditHistory' :
		'<div class="modal hide fade alert-box aw-topic-edit-note-box aw-question-edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('编辑记录') + '</h3>'+
				'</div>'+
				'<div class="modal-body">'+
					'<p>{{data}}</p>'+
				'</div>'+
			'</div>',

	'editTopicDorpdownList' : '<li><a>{{name}}</a></li>',
	'questionRedirectList' : '<li><a class="aw-hide-txt" onclick="ajax_request({{url}})">{{name}}</a></li>',
	'questionDropdownList' : '<li><a class="aw-hide-txt" href="{{url}}">{{name}}</a></li>',


	'commentBox' : 
			'<div class="aw-comment-box" id="{{comment_form_id}}">'+
				'<div class="aw-comment-list"><p align="center" class="aw-padding10"><i class="aw-loading"></i></p></div>'+
				'<form action="{{comment_form_action}}" method="post" onsubmit="return false">'+
					'<div class="aw-comment-box-main">'+
						'<textarea class="aw-comment-txt" name="message" placeholder="' + _t('评论一下') + '..."></textarea>'+
						'<div class="aw-comment-box-btn">'+
							'<span class="pull-right">'+
								'<a href="javascript:;" class="btn btn-mini btn-success" onclick="save_comment(this);">' + _t('评论') + '</a>'+
								'<a href="javascript:;" class="btn btn-mini close-comment-box">' + _t('取消') + '</a>'+
							'</span>'+
						'</div>'+
					'</div>'+
				'</form>'+
				'<i class="aw-icon i-comment-triangle"></i>'+
			'</div>',
			
	'commentBoxClose' : 
			'<div class="aw-comment-box" id="{{comment_form_id}}">'+
				'<div class="aw-comment-list"><p align="center" class="aw-padding10"><i class="aw-loading"></i></p></div>'+
				'<i class="aw-icon i-comment-triangle"></i>'+
			'</div>',

	'dropdownList' : 
		'<div aria-labelledby="dropdownMenu" role="menu" class="dropdown-menu aw-dropdown-menu">'+
			'<span><i class="aw-icon i-dropdown-triangle"></i></span>'+
			'<ul>'+
			'{{#items}}'+
				'<li><a data-value="{{id}}">{{title}}</a></li>'+
			'{{/items}}'+
			'</ul>'+
		'</div>',

	'reportBox' :
			'<div class="modal hide fade alert-box aw-share-box aw-share-box-message aw-report-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'<h3 id="myModalLabel">' + _t('举报问题') + '</h3>'+
				'</div>'+
				'<form id="quick_publish" method="post" action="' + G_BASE_URL + '/question/ajax/save_report/">'+
					'<input type="hidden" name="type" value="{{item_type}}" />'+
					'<input type="hidden" name="target_id" value="{{item_id}}" />'+
					'<div class="modal-body">'+
						'<div id="quick_publish_error" class="error-message alert  alert-error hide"><em></em></div>'+
						'<textarea name="reason" placeholder="' + _t('请填写举报理由') + '..."></textarea>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
						'<button class="btn btn-large btn-success" onclick="ajax_post($(\'#quick_publish\'), _quick_publish_processer);return false;">提交</button>'+
					'</div>'+
				'</form>'+
			'</div>',

	'searchDropdownList1' : 
		'<li class="{{active}} question clearfix"><a class="aw-hide-txt aw-inline-block" href="{{url}}"><i class="aw-icon i-star-mini"></i>{{content}} </a><span class="aw-inline-block">{{discuss_count}} ' + _t('个回复') + '</span></li>',
	'searchDropdownList2' : 
		'<li class="clearfix"><a href="{{url}}" class="aw-topic-name" data-id="{{topic_id}}"><span>{{name}}</span></a> <span>{{discuss_count}} ' + _t('个问题') + '</span></li>',
	'searchDropdownList3' : 
		'<li class="clearfix"><a class="aw-user-name aw-inline-block" data-id="{{uid}}"><img src="{{img}}" /></a><a class="aw-inline-block" href="{{url}}">{{name}}</a><span class="aw-hide-txt aw-inline-block">{{intro}}</span></li>',
	'inviteDropdownList' :
		'<li><a data-id="{{uid}}" data-value="{{name}}"><img class="img" src="{{img}}" />{{name}}</a></li>',
	'inviteUserList' : 
		'<li>'+
			'<a class="pull-right btn btn-mini" onclick="disinvite_user($(this),{{uid}});$(this).parent().detach();">' + _t('取消邀请') + '</a>'+
			'<a class="aw-user-name" data-id="{{uid}}">'+
				'<img src="{{img}}" alt="" />'+
			'</a>'+
			'<span class="aw-text-color-666">{{name}}</span>'+
		'</li>',
	
	'voteBar' : 
		'<div class="aw-vote-bar pull-left">'+
			'<a class="aw-border-radius-5 {{up_class}}" href="javascript:;" onclick="agreeVote(this, \'{{user_name}}\', {{answer_id}})">'+
				'<i data-original-title="' + _t('赞同回复') + '" class="aw-icon i-up active" data-toggle="tooltip" title="" data-placement="right"></i>'+
			'</a>'+
			'<em class="aw-border-radius-5 aw-vote-bar-count aw-hide-txt active">{{agree_count}}</em>'+
			'<a class="aw-border-radius-5 {{down_class}}" onclick="disagreeVote(this, \'{{user_name}}\', {{answer_id}})">'+
				'<i data-original-title="' + _t('对回复持反对意见') + '" class="aw-icon i-down" data-toggle="tooltip" title="" data-placement="right"></i>'+
			'</a>'+
		'</div>',

	'educateInsert' :
			'<td class="e1" data-txt="{{school}}">{{school}}</td>'+
			'<td class="e2" data-txt="{{departments}}">{{departments}}</td>'+
			'<td class="e3" data-txt="{{year}}">{{year}} ' + _t('年') + '</td>'+
			'<td><a class="delete-educate">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="edit-educate">' + _t('编辑') + '</a></td>',

	'educateEdit' : 
			'<td><input type="text" value="{{school}}" class="school"></td>'+
			'<td><input type="text" value="{{departments}}" class="departments"></td>'+
			'<td><select class="edityear">'+
				'</select> ' + _t('年') + '</td>'+
			'<td><a class="delete-educate">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="save-educate">' + _t('保存') + '</a></td>',

	'workInsert' : 
			'<td class="w1" data-txt="{{company}}">{{company}}</td>'+
			'<td class="w2" data-txt="{{workid}}">{{work}}</td>'+
			'<td class="w3" data-s-val="{{syear}}" data-e-val="{{eyear}}">{{syear}} ' + _t('年') + ' ' + _t('至') + ' {{eyear}}</td>'+
			'<td><a class="delete-work">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="edit-work">' + _t('编辑') + '</a></td>',

	'workEidt' : 
			'<td><input type="text" value="{{company}}" class="company"></td>'+
			'<td>'+
				'<select class="work editwork">'+
				'</select>'+
			'</td>'+
			'<td><select class="editsyear">'+
				'</select>&nbsp;&nbsp;' + _t('年') + ' &nbsp;&nbsp; ' + _t('至') + '&nbsp;&nbsp;&nbsp;&nbsp;'+
				'<select class="editeyear">'+
				'</select> ' + _t('年') +
			'</td>'+
			'<td><a class="delete-work">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="save-work">' + _t('保存') + '</a></td>'


}