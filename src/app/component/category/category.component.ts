import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items:MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: '小说',
        items: [
          {label: '言情'},
          {label: '青春'},
          {label: '都市'},
          {label: '历史'},
          {label: '科幻'},
          {label: '官场商场'},
          {label: '悬疑推理'},
          {label: '武侠魔幻'},
          {label: '灵异恐怖'},
          {label: '社会乡土'},
          {label: '影视文学'},
          {label: '现代当代'},
          {label: '外国文学'},
          {label: '其他'}

        ]
      },
      {
        label: '经济管理',
        items: [
          {label: '企业管理'},
          {label: '经济金融'},
          {label: '投资理财'},
          {label: '市场营销'},
          {label: '财会统计'},
          {label: '通俗读物'},
          {label: '其他'}

        ]
      },
      {
        label: '成功励志',
        items: [
          {label: '成功学'},
          {label: '人在职场'},
          {label: '演讲口才'},
          {label: '人际处事'},
          {label: '心灵修养'},
          {label: '性格与情绪'},
          {label: '青少年励志'},
          {label: '其他'}

        ]
      },
      {
        label: '历史传记',
        items: [
          {label: '任务传记'},
          {label: '世界历史'},
          {label: '中国历史'}

        ]
      },
      {
        label: '计算机',
        items: [
          {label: '软硬件研发'},
          {label: '图形图像'},
          {label: '网络通信'},
          {label: '家庭与办公'},
          {label: 'IT人文'},
          {label: '其他'}

        ]
      },
      {
        label: '两性情感',
        items: [
          {label: '两性关系'},
          {label: '婚姻家庭'},
          {label: '情感恋爱'}
        ]
      },
      {
        label: '生活',
        items: [
          {label: '烹调饮食'},
          {label: '健康养生'},
          {label: '占星风水'},
          {label: '运动健身'},
          {label: '休闲娱乐'},
          {label: '其他'}

        ]
      },
      {
        label: '亲子少儿',
        items: [
          {label: '孕产育儿'},
          {label: '儿童文学'},
          {label: '科普百科'},
          {label: '幼儿启蒙'}

        ]
      },
      {
        label: '文学艺术',
        items: [
          {label: '散文随笔'},
          {label: '纪实文学'},
          {label: '文学理论'},
          {label: '诗词歌赋'},
          {label: '国学经典'},
          {label: '世界名著'},
          {label: '其他'}


        ]
      },

    ];
  }

}
