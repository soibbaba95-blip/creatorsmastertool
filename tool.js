// ===== CREATOR TOOL LOGIC =====

// Adsense Earnings
function toolAdsense(){
  const views = +document.getElementById("ads_views").value || 0;
  const cpm = +document.getElementById("ads_cpm").value || 0;
  const earn = (views/1000)*cpm;
  document.getElementById("ads_out").innerText = "Estimated ₹ " + earn.toFixed(2);
}

// YouTube Estimate
function toolYT(){
  const v = +document.getElementById("yt_views").value || 0;
  document.getElementById("yt_out").innerText = "Estimated ₹ " + (v/1000*120).toFixed(2);
}

// Hashtags
function toolHash(){
  const t = document.getElementById("hash_topic").value;
  document.getElementById("hash_out").innerText =
   "#"+t+" #viral #trending #reels #shorts #explore";
}

// SEO Title
function toolTitle(){
  const k = document.getElementById("title_key").value;
  document.getElementById("title_out").innerText =
   "Best "+k+" Guide That Gets Massive Views";
}

// Description
function toolDesc(){
  const k = document.getElementById("desc_key").value;
  document.getElementById("desc_out").innerText =
   "Complete tutorial about "+k+" with pro tips and growth hacks.";
}

// Thumbnail Text
function toolThumb(){
  const k = document.getElementById("thumb_key").value;
  document.getElementById("thumb_out").innerText =
   "DON'T MISS THIS "+k.toUpperCase();
}

// Reel Ideas
function toolReel(){
  const k = document.getElementById("reel_key").value;
  document.getElementById("reel_out").innerText =
   "5 Viral "+k+" Reel Ideas";
}

// Bio Generator
function toolBio(){
  const k = document.getElementById("bio_key").value;
  document.getElementById("bio_out").innerText =
   "Creator sharing "+k+" daily | Follow for value";
}

// Brand Name
function toolBrand(){
  const k = document.getElementById("brand_key").value;
  document.getElementById("brand_out").innerText =
   k+" Labs";
}

// Hook Line
function toolHook(){
  const k = document.getElementById("hook_key").value;
  document.getElementById("hook_out").innerText =
   "Stop scrolling if you want "+k;
}

// Affiliate Profit
function toolAffiliate(){
  const s = +document.getElementById("aff_sales").value || 0;
  const c = +document.getElementById("aff_comm").value || 0;
  document.getElementById("aff_out").innerText =
   "Profit ₹ " + (s*c);
}

// Coin Reward
let coins = 0;
function toolReward(){
  coins += 10;
  document.getElementById("coin_out").innerText =
   "Coins: " + coins;
}