
import chroma from 'chroma-js';


export const colorShades = [
  // Shades of Red
  {
    name: 'Red',
    shades: sortShades([
      '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350',
      '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C',
      '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#C51162'
    ])
  },

  // Shades of Blue
  {
    name: 'Blue',
    shades: sortShades([
      '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5',
      '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1',
      '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#651FFF'
    ])
  },

  // Shades of Green
  {
    name: 'Green',
    shades: sortShades([
      '#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A',
      '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20',
      '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#00C853'
    ])
  },

  // Shades of Yellow
  {
    name: 'Yellow',
    shades: sortShades([
      '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58',
      '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17',
      '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FF6F00'
    ])
  },

  // Shades of Purple
  {
    name: 'Purple',
    shades: sortShades([
      '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC',
      '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C',
      '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#5E35B1'
    ])
  },

  // Shades of Orange
  {
    name: 'Orange',
    shades: sortShades([
      '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726',
      '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100',
      '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#DD2C00'
    ])
  }
];


function sortShades(shades) {
  return shades.sort((a, b) => {
    const luminanceA = chroma(a).luminance();
    const luminanceB = chroma(b).luminance();

    if (luminanceA < luminanceB) {
      return -1;
    }
    if (luminanceA > luminanceB) {
      return 1;
    }
    return 0;
  });
}
