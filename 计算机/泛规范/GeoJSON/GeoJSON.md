# GeoJSON

GeoJSON 是一种用于编码各种地理数据结构的格式。

相关文档：

- 官网：<https://geojson.org/>
- 规范定义：<https://www.rfc-editor.org/rfc/rfc7946>
- 地图取 GEO：<https://geojson.io/#map=2.51/3.96/24.93>
- 阿里地图取 GEO：<http://datav.aliyun.com/portal/school/atlas/area_selector>
- 地图数据编辑：<https://mapshaper.org/>

## 结构

```JSON
{
  // 类型
  "type": "Feature",
  // 层级信息
  "geometry": {
    "type": "Point",
    // 图形信息
    "coordinates": [125.6, 10.1]
  },
  // 属性
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
