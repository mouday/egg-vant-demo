create table article(
    id int(11) primary key not null auto_increment,
    title varchar(255) not null default '' comment '文章标题',
    create_time timestamp default null comment '发布时间',
    summary varchar(255) not null default '' comment '文章简介',
    content text default null comment '文章内容',
    image text default null comment '文章图片'
) engine=InnoDB comment "文章表"

insert into article(title, create_time, summary, content, image) values(
    "《雪人奇缘》：这场耗时七年的中美动画合作实验成功吗？",
      "2019-10-13 20:01:00",
      '历时七年、八个老板，创作团队经历数不尽的文化磨合，其经验极为难得。',
      "“七年前，我开始撰写这个故事，然后梦工场发生了变故。我换了八个不同的老板，整个studio经历了数次股权变更，甚至我一度认为这个故事再无呈现的可能。”回想《雪人奇缘》从立项到正式上映的七年，导演兼编剧吉尔·卡尔顿（Jill Culton）无限感慨：“如果要给片子的创作难度打分，我想给10000分，它真的太难了。”从最初以“Everest”之名在梦工场动画立项，到2016年梦工场动画被环球收购、导演更换，再到2018年华人文化全资控股东方梦工厂、Jill重新回到项目中来，可以说《雪人奇缘》不仅见证了一家动画公司几经变迁，同样也是中国动画团队从外包走向自主独立，在好莱坞的机制下学习更加专业的项目掌控，向世界讲述中国故事的旅程。",
      "https://img.36krcdn.com/20191013/v2_1570962482669_img_000"
)