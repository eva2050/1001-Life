// 16个转世身份的像素风SVG插画
// 每张32x32像素格，用rect拼出像素点

export const PIXEL_ART: Record<string, string> = {
  // 青石板
  stone_path: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#8A9A7A"/>
    <rect x="0" y="0" width="32" height="2" fill="#6B7A5E"/>
    <rect x="0" y="2" width="14" height="10" fill="#9BAA8C"/>
    <rect x="14" y="2" width="2" height="10" fill="#5A6A4E"/>
    <rect x="16" y="2" width="16" height="10" fill="#92A082"/>
    <rect x="0" y="12" width="2" height="8" fill="#5A6A4E"/>
    <rect x="2" y="12" width="20" height="8" fill="#A0B090"/>
    <rect x="22" y="12" width="2" height="8" fill="#5A6A4E"/>
    <rect x="24" y="12" width="8" height="8" fill="#8A9A7A"/>
    <rect x="0" y="20" width="10" height="10" fill="#9BAA8C"/>
    <rect x="10" y="20" width="2" height="10" fill="#5A6A4E"/>
    <rect x="12" y="20" width="20" height="10" fill="#8A9A7A"/>
    <rect x="4" y="6" width="6" height="2" fill="#6B7A5E"/>
    <rect x="18" y="4" width="8" height="2" fill="#6B7A5E"/>
    <rect x="6" y="15" width="10" height="2" fill="#6B7A5E"/>
    <rect x="26" y="14" width="4" height="2" fill="#6B7A5E"/>
    <rect x="14" y="23" width="12" height="2" fill="#6B7A5E"/>
    <rect x="2" y="25" width="6" height="2" fill="#6B7A5E"/>
    <rect x="0" y="30" width="32" height="2" fill="#5A6A4E"/>
  </svg>`,

  // 河底石头
  river_stone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#4A7A9B"/>
    <rect x="4" y="6" width="2" height="2" fill="#6AADC8"/>
    <rect x="12" y="2" width="4" height="2" fill="#6AADC8"/>
    <rect x="24" y="8" width="2" height="2" fill="#6AADC8"/>
    <rect x="2" y="14" width="2" height="2" fill="#5A8FAA"/>
    <rect x="28" y="18" width="2" height="2" fill="#5A8FAA"/>
    <rect x="8" y="12" width="16" height="10" fill="#B8A898"/>
    <rect x="10" y="10" width="12" height="2" fill="#B8A898"/>
    <rect x="6" y="14" width="2" height="6" fill="#B8A898"/>
    <rect x="24" y="14" width="2" height="6" fill="#B8A898"/>
    <rect x="10" y="22" width="12" height="2" fill="#9A8878"/>
    <rect x="8" y="20" width="2" height="2" fill="#9A8878"/>
    <rect x="22" y="20" width="2" height="2" fill="#9A8878"/>
    <rect x="12" y="14" width="4" height="2" fill="#9A8878"/>
    <rect x="18" y="16" width="4" height="2" fill="#9A8878"/>
    <rect x="10" y="18" width="2" height="2" fill="#CCC0B0"/>
    <rect x="16" y="12" width="4" height="2" fill="#CCC0B0"/>
    <rect x="0" y="26" width="32" height="2" fill="#3A6A8B"/>
    <rect x="0" y="28" width="32" height="4" fill="#2A5A7B"/>
    <rect x="6" y="27" width="4" height="1" fill="#6AADC8"/>
    <rect x="20" y="27" width="6" height="1" fill="#6AADC8"/>
  </svg>`,

  // 老井
  old_well: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#C8B89A"/>
    <rect x="10" y="18" width="12" height="12" fill="#8B7355"/>
    <rect x="10" y="18" width="12" height="2" fill="#6B5535"/>
    <rect x="10" y="18" width="2" height="12" fill="#6B5535"/>
    <rect x="20" y="18" width="2" height="12" fill="#6B5535"/>
    <rect x="12" y="20" width="8" height="10" fill="#1A2A3A"/>
    <rect x="13" y="21" width="6" height="8" fill="#0A1A2A"/>
    <rect x="14" y="23" width="4" height="2" fill="#2A4A6A" opacity="0.6"/>
    <rect x="8" y="10" width="2" height="10" fill="#5A4030"/>
    <rect x="22" y="10" width="2" height="10" fill="#5A4030"/>
    <rect x="6" y="8" width="20" height="4" fill="#7A5A3A"/>
    <rect x="6" y="8" width="20" height="2" fill="#9A7A5A"/>
    <rect x="14" y="10" width="4" height="8" fill="#8A6A4A"/>
    <rect x="15" y="14" width="2" height="4" fill="#6A4A2A"/>
    <rect x="4" y="28" width="24" height="4" fill="#A89070"/>
    <rect x="4" y="28" width="24" height="2" fill="#B8A080"/>
    <rect x="2" y="26" width="4" height="6" fill="#9A8060"/>
    <rect x="26" y="26" width="4" height="6" fill="#9A8060"/>
    <rect x="3" y="4" width="2" height="8" fill="#6A5030"/>
    <rect x="1" y="4" width="4" height="2" fill="#8A7050"/>
  </svg>`,

  // 风铃
  wind_chime: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#E8D8C0"/>
    <rect x="14" y="0" width="4" height="2" fill="#8B6914"/>
    <rect x="13" y="2" width="6" height="2" fill="#A07820"/>
    <rect x="10" y="4" width="12" height="2" fill="#B88828"/>
    <rect x="10" y="4" width="2" height="8" fill="#C89830"/>
    <rect x="20" y="4" width="2" height="8" fill="#C89830"/>
    <rect x="10" y="12" width="12" height="6" fill="#D4A838"/>
    <rect x="10" y="12" width="12" height="2" fill="#E8C060"/>
    <rect x="12" y="14" width="8" height="4" fill="#C89830"/>
    <rect x="14" y="18" width="2" height="4" fill="#A07820"/>
    <rect x="18" y="18" width="2" height="4" fill="#A07820"/>
    <rect x="8" y="18" width="2" height="6" fill="#A07820"/>
    <rect x="22" y="18" width="2" height="6" fill="#A07820"/>
    <rect x="12" y="22" width="4" height="4" fill="#C89830"/>
    <rect x="16" y="24" width="4" height="4" fill="#C89830"/>
    <rect x="6" y="24" width="4" height="4" fill="#C89830"/>
    <rect x="22" y="24" width="4" height="4" fill="#C89830"/>
    <rect x="12" y="14" width="2" height="2" fill="#E8D060" opacity="0.8"/>
    <rect x="18" y="15" width="2" height="2" fill="#E8D060" opacity="0.8"/>
    <rect x="6" y="8" width="4" height="2" fill="#D4B870" opacity="0.5"/>
    <rect x="22" y="10" width="4" height="2" fill="#D4B870" opacity="0.5"/>
  </svg>`,

  // 香炉烟
  infj_fortune: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#F0E8D8"/>
    <rect x="12" y="22" width="8" height="6" fill="#8B7355"/>
    <rect x="10" y="26" width="12" height="4" fill="#7A6245"/>
    <rect x="10" y="26" width="12" height="2" fill="#9A8265"/>
    <rect x="14" y="20" width="4" height="4" fill="#6B5335"/>
    <rect x="13" y="18" width="6" height="2" fill="#5A4225"/>
    <rect x="9" y="18" width="14" height="2" fill="#9A8265"/>
    <rect x="15" y="14" width="2" height="4" fill="#B8A090"/>
    <rect x="14" y="10" width="4" height="4" fill="#C8B0A0" opacity="0.8"/>
    <rect x="13" y="8" width="6" height="2" fill="#D8C8B8" opacity="0.7"/>
    <rect x="15" y="6" width="2" height="2" fill="#E8D8C8" opacity="0.6"/>
    <rect x="14" y="4" width="4" height="2" fill="#E8E0D0" opacity="0.5"/>
    <rect x="16" y="2" width="2" height="2" fill="#F0EAE0" opacity="0.4"/>
    <rect x="13" y="0" width="2" height="2" fill="#F0EAE0" opacity="0.3"/>
    <rect x="17" y="0" width="2" height="2" fill="#F0EAE0" opacity="0.3"/>
    <rect x="11" y="19" width="2" height="2" fill="#D4A060"/>
    <rect x="19" y="19" width="2" height="2" fill="#D4A060"/>
    <rect x="13" y="19" width="6" height="1" fill="#E8C080"/>
  </svg>`,

  // 落叶
  infp_leaf: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#E8E0D0"/>
    <rect x="16" y="2" width="2" height="4" fill="#8B5A2B"/>
    <rect x="10" y="6" width="14" height="2" fill="#C87020"/>
    <rect x="8" y="8" width="18" height="2" fill="#D48030"/>
    <rect x="6" y="10" width="20" height="4" fill="#E09040"/>
    <rect x="8" y="14" width="16" height="4" fill="#D48030"/>
    <rect x="10" y="18" width="12" height="4" fill="#C87020"/>
    <rect x="12" y="22" width="8" height="2" fill="#B86010"/>
    <rect x="14" y="24" width="4" height="2" fill="#A85010"/>
    <rect x="15" y="26" width="2" height="4" fill="#8B5A2B"/>
    <rect x="14" y="12" width="2" height="8" fill="#A85010"/>
    <rect x="16" y="8" width="2" height="12" fill="#A85010"/>
    <rect x="10" y="10" width="4" height="2" fill="#B86010" opacity="0.6"/>
    <rect x="20" y="12" width="4" height="2" fill="#B86010" opacity="0.6"/>
    <rect x="8" y="14" width="4" height="2" fill="#E8A850" opacity="0.7"/>
    <rect x="22" y="10" width="2" height="4" fill="#E8A850" opacity="0.7"/>
  </svg>`,

  // 家族群（手机）→ 改成油灯
  enfj_groupchat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#F0E8D0"/>
    <!-- 铜钟身 -->
    <rect x="10" y="10" width="12" height="14" fill="#B8860B"/>
    <rect x="10" y="10" width="12" height="2" fill="#D4A017"/>
    <rect x="9" y="22" width="14" height="3" fill="#8B6914"/>
    <rect x="9" y="22" width="14" height="1" fill="#C8A840"/>
    <!-- 钟顶 -->
    <rect x="13" y="6" width="6" height="4" fill="#9A7820"/>
    <rect x="14" y="4" width="4" height="2" fill="#C8A840"/>
    <rect x="15" y="2" width="2" height="2" fill="#8B6914"/>
    <!-- 钟身纹路 -->
    <rect x="10" y="14" width="12" height="1" fill="#8B6914" opacity="0.5"/>
    <rect x="10" y="18" width="12" height="1" fill="#8B6914" opacity="0.5"/>
    <rect x="12" y="12" width="2" height="10" fill="#8B6914" opacity="0.3"/>
    <rect x="18" y="12" width="2" height="10" fill="#8B6914" opacity="0.3"/>
    <!-- 钟口 -->
    <rect x="9" y="24" width="14" height="2" fill="#7A5810"/>
    <rect x="8" y="25" width="16" height="2" fill="#6A4808"/>
    <!-- 撞钟点 -->
    <rect x="15" y="16" width="2" height="2" fill="#F0C840"/>
  </svg>`,

  // 橘子树
  enfp_tangent2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#D4E8C0"/>
    <rect x="14" y="24" width="4" height="8" fill="#8B5A2B"/>
    <rect x="12" y="20" width="8" height="6" fill="#6B8A40"/>
    <rect x="10" y="14" width="12" height="8" fill="#7AAA48"/>
    <rect x="8" y="10" width="16" height="6" fill="#8ABB50"/>
    <rect x="10" y="6" width="12" height="6" fill="#7AAA48"/>
    <rect x="12" y="4" width="8" height="4" fill="#6B9840"/>
    <rect x="14" y="2" width="4" height="4" fill="#5A8830"/>
    <rect x="8" y="14" width="4" height="4" fill="#6B9840"/>
    <rect x="20" y="12" width="4" height="4" fill="#6B9840"/>
    <rect x="10" y="18" width="2" height="2" fill="#5A8830"/>
    <rect x="20" y="18" width="2" height="2" fill="#5A8830"/>
    <rect x="9" y="16" width="4" height="4" fill="#E8780A"/>
    <rect x="10" y="17" width="2" height="2" fill="#F08820"/>
    <rect x="19" y="12" width="4" height="4" fill="#E8780A"/>
    <rect x="20" y="13" width="2" height="2" fill="#F08820"/>
    <rect x="14" y="8" width="4" height="4" fill="#E8780A"/>
    <rect x="15" y="9" width="2" height="2" fill="#F08820"/>
    <rect x="6" y="11" width="4" height="4" fill="#E8780A"/>
    <rect x="7" y="12" width="2" height="2" fill="#F08820"/>
    <rect x="22" y="16" width="4" height="4" fill="#E8780A"/>
    <rect x="23" y="17" width="2" height="2" fill="#F08820"/>
  </svg>`,

  // 扶手杆
  istj_handrail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#D0C8E0"/>
    <rect x="14" y="0" width="4" height="32" fill="#8A8AA0"/>
    <rect x="14" y="0" width="2" height="32" fill="#B0B0C8"/>
    <rect x="4" y="6" width="24" height="4" fill="#9A9AB8"/>
    <rect x="4" y="6" width="24" height="2" fill="#C0C0D8"/>
    <rect x="4" y="22" width="24" height="4" fill="#9A9AB8"/>
    <rect x="4" y="22" width="24" height="2" fill="#C0C0D8"/>
    <rect x="13" y="4" width="6" height="4" fill="#7A7A98"/>
    <rect x="13" y="24" width="6" height="4" fill="#7A7A98"/>
    <rect x="2" y="8" width="4" height="16" fill="#8080A0"/>
    <rect x="26" y="8" width="4" height="16" fill="#8080A0"/>
    <rect x="2" y="8" width="2" height="16" fill="#A0A0C0"/>
    <rect x="26" y="8" width="2" height="16" fill="#A0A0C0"/>
    <rect x="15" y="10" width="2" height="12" fill="#A8A8C0"/>
  </svg>`,

  // 绿植
  isfj_officeplant: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#F0EAD8"/>
    <rect x="12" y="26" width="8" height="6" fill="#C8A878"/>
    <rect x="10" y="24" width="12" height="4" fill="#B89860"/>
    <rect x="10" y="24" width="12" height="2" fill="#D8B888"/>
    <rect x="14" y="20" width="4" height="6" fill="#5A7A30"/>
    <rect x="12" y="16" width="8" height="6" fill="#6A9A38"/>
    <rect x="8" y="12" width="6" height="8" fill="#78AA40"/>
    <rect x="18" y="12" width="6" height="8" fill="#78AA40"/>
    <rect x="10" y="8" width="12" height="6" fill="#88BB48"/>
    <rect x="12" y="4" width="8" height="6" fill="#78AA40"/>
    <rect x="14" y="2" width="4" height="4" fill="#6A9A38"/>
    <rect x="8" y="14" width="4" height="2" fill="#4A7020"/>
    <rect x="20" y="14" width="4" height="2" fill="#4A7020"/>
    <rect x="10" y="10" width="4" height="2" fill="#4A7020"/>
    <rect x="18" y="10" width="4" height="2" fill="#4A7020"/>
    <rect x="16" y="6" width="4" height="2" fill="#98CC58" opacity="0.7"/>
    <rect x="12" y="18" width="2" height="2" fill="#98CC58" opacity="0.7"/>
    <rect x="20" y="16" width="2" height="2" fill="#98CC58" opacity="0.7"/>
  </svg>`,

  // 土墙
  mud_wall: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#C8A870"/>
    <rect x="0" y="0" width="32" height="4" fill="#A88850"/>
    <rect x="0" y="4" width="14" height="6" fill="#C8A870"/>
    <rect x="14" y="4" width="2" height="6" fill="#A88850"/>
    <rect x="16" y="4" width="16" height="6" fill="#C09060"/>
    <rect x="0" y="10" width="2" height="6" fill="#A88850"/>
    <rect x="2" y="10" width="18" height="6" fill="#C8A870"/>
    <rect x="20" y="10" width="2" height="6" fill="#A88850"/>
    <rect x="22" y="10" width="10" height="6" fill="#B89860"/>
    <rect x="0" y="16" width="10" height="6" fill="#C09060"/>
    <rect x="10" y="16" width="2" height="6" fill="#A88850"/>
    <rect x="12" y="16" width="20" height="6" fill="#C8A870"/>
    <rect x="0" y="22" width="32" height="4" fill="#A88850"/>
    <rect x="0" y="26" width="32" height="6" fill="#8A7040"/>
    <rect x="4" y="2" width="6" height="2" fill="#A88850"/>
    <rect x="20" y="6" width="8" height="2" fill="#A88850"/>
    <rect x="6" y="12" width="8" height="2" fill="#A88850"/>
    <rect x="24" y="12" width="4" height="2" fill="#A88850"/>
    <rect x="14" y="18" width="10" height="2" fill="#A88850"/>
    <rect x="2" y="20" width="6" height="2" fill="#A88850"/>
  </svg>`,

  // 木船
  ferry_boat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#6A9AB8"/>
    <rect x="0" y="24" width="32" height="8" fill="#4A7A98"/>
    <rect x="0" y="22" width="32" height="4" fill="#5A8AA8"/>
    <rect x="2" y="22" width="28" height="2" fill="#7AAAC8"/>
    <rect x="4" y="16" width="24" height="8" fill="#8B6914"/>
    <rect x="4" y="16" width="24" height="2" fill="#A07820"/>
    <rect x="4" y="16" width="2" height="8" fill="#6B5010"/>
    <rect x="26" y="16" width="2" height="8" fill="#6B5010"/>
    <rect x="6" y="18" width="4" height="2" fill="#C89830"/>
    <rect x="12" y="18" width="4" height="2" fill="#C89830"/>
    <rect x="18" y="18" width="4" height="2" fill="#C89830"/>
    <rect x="6" y="20" width="20" height="2" fill="#7A5810"/>
    <rect x="2" y="22" width="4" height="4" fill="#6B5010"/>
    <rect x="26" y="22" width="4" height="4" fill="#6B5010"/>
    <rect x="15" y="4" width="2" height="14" fill="#5A4020"/>
    <rect x="10" y="6" width="12" height="6" fill="#F0E8C0"/>
    <rect x="10" y="6" width="12" height="2" fill="#FFFFFF"/>
    <rect x="10" y="6" width="2" height="6" fill="#E0D8B0"/>
    <rect x="3" y="25" width="6" height="2" fill="#8ABAC8"/>
    <rect x="22" y="26" width="8" height="2" fill="#8ABAC8"/>
  </svg>`,

  // 云
  istp_cloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#B8D8F0"/>
    <rect x="6" y="16" width="20" height="8" fill="#F0F4F8"/>
    <rect x="4" y="18" width="24" height="6" fill="#F0F4F8"/>
    <rect x="2" y="20" width="28" height="4" fill="#FFFFFF"/>
    <rect x="8" y="14" width="8" height="4" fill="#F0F4F8"/>
    <rect x="16" y="12" width="10" height="6" fill="#F0F4F8"/>
    <rect x="18" y="10" width="6" height="4" fill="#E8EEF4"/>
    <rect x="4" y="24" width="24" height="2" fill="#D8E8F4"/>
    <rect x="0" y="6" width="4" height="2" fill="#D0E4F0" opacity="0.6"/>
    <rect x="28" y="10" width="4" height="2" fill="#D0E4F0" opacity="0.6"/>
    <rect x="6" y="4" width="6" height="2" fill="#D0E4F0" opacity="0.4"/>
    <rect x="10" y="18" width="2" height="2" fill="#E0ECF8"/>
    <rect x="20" y="16" width="4" height="2" fill="#E0ECF8"/>
  </svg>`,

  // 老乌龟
  isfp_turtle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#B8D8C0"/>
    <rect x="8" y="14" width="16" height="10" fill="#5A8040"/>
    <rect x="6" y="16" width="20" height="6" fill="#6A9048"/>
    <rect x="10" y="12" width="12" height="4" fill="#6A9048"/>
    <rect x="12" y="10" width="8" height="4" fill="#5A8040"/>
    <rect x="10" y="14" width="4" height="4" fill="#4A7030"/>
    <rect x="18" y="14" width="4" height="4" fill="#4A7030"/>
    <rect x="14" y="12" width="4" height="6" fill="#4A7030"/>
    <rect x="10" y="16" width="4" height="4" fill="#7AAA58"/>
    <rect x="18" y="16" width="4" height="4" fill="#7AAA58"/>
    <rect x="14" y="14" width="4" height="8" fill="#7AAA58"/>
    <rect x="4" y="18" width="4" height="4" fill="#5A8040"/>
    <rect x="24" y="18" width="4" height="4" fill="#5A8040"/>
    <rect x="10" y="22" width="4" height="4" fill="#5A8040"/>
    <rect x="18" y="22" width="4" height="4" fill="#5A8040"/>
    <rect x="6" y="12" width="4" height="6" fill="#5A8040"/>
    <rect x="6" y="12" width="2" height="2" fill="#3A6020"/>
    <rect x="7" y="14" width="2" height="2" fill="#88BB60"/>
    <rect x="8" y="10" width="2" height="2" fill="#2A1A0A"/>
    <rect x="14" y="8" width="4" height="4" fill="#6A9048"/>
    <rect x="15" y="7" width="2" height="2" fill="#5A8040"/>
  </svg>`,

  // 指路石碑
  estp_delivery: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#E8E0CC"/>
    <!-- 石碑主体 -->
    <rect x="11" y="6" width="10" height="18" fill="#A09080"/>
    <rect x="11" y="6" width="10" height="2" fill="#C0B090"/>
    <rect x="11" y="6" width="2" height="18" fill="#B8A888"/>
    <!-- 碑顶圆弧 -->
    <rect x="12" y="4" width="8" height="2" fill="#A09080"/>
    <rect x="13" y="2" width="6" height="2" fill="#A09080"/>
    <rect x="14" y="0" width="4" height="2" fill="#A09080"/>
    <!-- 字迹（模糊的横线） -->
    <rect x="13" y="9" width="6" height="1" fill="#706050" opacity="0.6"/>
    <rect x="13" y="12" width="5" height="1" fill="#706050" opacity="0.4"/>
    <rect x="13" y="15" width="6" height="1" fill="#706050" opacity="0.3"/>
    <rect x="13" y="18" width="4" height="1" fill="#706050" opacity="0.2"/>
    <!-- 石碑底座 -->
    <rect x="9" y="24" width="14" height="4" fill="#887868"/>
    <rect x="9" y="24" width="14" height="2" fill="#A09080"/>
    <rect x="7" y="28" width="18" height="4" fill="#706050"/>
    <!-- 苔藓点 -->
    <rect x="11" y="20" width="2" height="2" fill="#5A7A30" opacity="0.5"/>
    <rect x="19" y="14" width="2" height="2" fill="#5A7A30" opacity="0.4"/>
  </svg>`,

  // 深山苔藓
  esfp_cybercat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
    <rect width="32" height="32" fill="#D8E8D0"/>
    <!-- 石头 -->
    <rect x="4" y="16" width="24" height="12" fill="#8A8878"/>
    <rect x="4" y="16" width="24" height="3" fill="#A8A898"/>
    <rect x="4" y="16" width="4" height="12" fill="#9A9888"/>
    <!-- 苔藓层 -->
    <rect x="4" y="13" width="4" height="4" fill="#4A7830"/>
    <rect x="8" y="11" width="4" height="6" fill="#5A8838"/>
    <rect x="12" y="12" width="4" height="5" fill="#4A7830"/>
    <rect x="16" y="10" width="4" height="7" fill="#608840"/>
    <rect x="20" y="13" width="4" height="4" fill="#507838"/>
    <rect x="24" y="14" width="4" height="3" fill="#4A7030"/>
    <!-- 苔藓高光 -->
    <rect x="4" y="13" width="4" height="1" fill="#78B050" opacity="0.6"/>
    <rect x="8" y="11" width="4" height="1" fill="#88C060" opacity="0.6"/>
    <rect x="16" y="10" width="4" height="1" fill="#78B050" opacity="0.6"/>
    <!-- 小水珠 -->
    <rect x="10" y="15" width="2" height="2" fill="#A8D8F0" opacity="0.7"/>
    <rect x="22" y="16" width="2" height="2" fill="#A8D8F0" opacity="0.5"/>
  </svg>`,
};
