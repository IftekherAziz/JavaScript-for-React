# Module 44
 
# আজকের জাভাস্ক্রিপ্ট এর কনসেপ্টগুলো React এ গেলে কাজে লাগবে। 

.

১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?var নামক একটা জিনিস আছে সেটাও জানতে হবে। 



২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে। 



২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি। 



৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো। 



৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।



৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে।



৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।





# সিম্পল বেসিক কয়েকটা ডাটা টাইপ সম্পর্কে জানতে হবে। 

১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable 



২. number সম্পর্কে জানতে হবে। integer, float কোনগুলা। স্ট্রিং থেকে নাম্বারে রূপান্তর করার সিস্টেম। কোন একটা সংখ্যা integer কিনা সেটা চেক করার সিস্টেম জানতে হবে। NaN বলতে একটা জিনিস আছে। সেটা কি জিনিস। 



৩. true false কখন ইউজ করে। সেটা জানতে হবে। কি কি ধরনের জিনিস জাভাস্ক্রিপ্ট এর truthy আর কি কি জিনিস জাভাস্ক্রিপ্ট এ falsy সেটা জানতে হবে। 



৪. null এবং undefined কি জিনিস। কখন কোনটা ইউজ করা হয়। বা কখন কোনটা কিভাবে চেক করতে হয়। সেটা জানতে হবে। 





# ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে



১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।



২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)



৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন কিভাবে লিখে। উদাহরণ হিসাবে তুমি এখন একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।



৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।



৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।



৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।






৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।



৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে।



৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে



৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ?





# স্ট্যান্ডার্ড ছোট ছোট কয়েকটা লাইব্রেরি আছে সেগুলা হালকা করে হলেও জানতে হবে। 

১. Math দিয়ে min, max, ceil, floor, abs, round, random ইত্যাদি দেখে রাখতে হবে। যদি লাগে যেন বের করে ফেলতে পারো 

২. Date কিভাবে ডিক্লেয়ার করে। সেখান থেকে সময় কিভাবে বের করে নেয় বা দরকার হলে সময় কিভাবে ফরম্যাট করে সেটা জানতে হবে 

৩. আগে না হয় পরে রেগুলার এক্সপ্রেশন কি জিনিস এবং কিভাবে এপ্লাই করে। কি কারণে এপ্লাই করে সেটা জানতে হবে 

৪. এটলিস্ট JSON কিভাবে parse করে বা stringify করে সেটা জানতে হবে 



# ব্রাউজার API সম্পর্কে চারটা জিনিস



১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে



২. location API কিভাবে ইউজ করবে ব্রাউজারে



৩. history API কিভাবে ইউজ করে



৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।



------------



# আরো পাঁচটা জিনিস জানতে হবে।



১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।



১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।



২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে



৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা



৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে



৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।



৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো।




# ডিবাগিং এবং dev tool সম্পর্কে জানতেই হবে।



১. console ট্যাব



২. source ট্যাব



৩. application



৪. Network



৫. Elements




# জাভাস্ক্রিপ্ট দিয়ে কিছু বেসিক প্রব্লেম সলভিং করে নিবে




যদিও রিএক্ট এর জন্য সরাসরি লাগবে না। তারপরে DOM, DOM ম্যানিপুলেশন, কিভাবে DOM এ ইভেন্ট হ্যান্ডলার যোগ করে। কিভাবে input থেকে ডাটা নিয়ে সেটাকে ওয়েবসাইট এ দেখানো যেতে পারে। এমন ৩-৪ টা প্রজেক্ট করতে হবে।



কিছু কন্সেপচুয়াল জিনিস জানতে হবে। এগুলা সরাসরি কাজে না লাগলেও ভিতরে ভিতরে ফিল করার জন্য লাগবে। যেমন জাভাস্ক্রিপ্ট কিভাবে কাজ করে। event loop, closure, ইত্যাদি।


দেখো উপরের জিনিসগুলা এর মধ্যে ১০০% জিনিস তুমি ধরে ফেলতে পারো কিনা। আর তুমি যদি উপরের জিনিসগুলা এর ৭০% বা তার বেশি জানো তাহলে তুমি ভালো পজিশনে আছো। নেক্সট এসাইনমেন্ট এর পরে ২ দিন রিভিশন দেয়া হবে। সেদিন রিভিশন দিয়ে এইগুলা কভার করে ফেলবে। আর যদি তুমি ৫০% এর মতো বুঝো তাহলে সামনে এগিয়ে যেতে পারবে। তবে ভালো করে মনোযোগ দিয়ে কষ্ট করে এগুতে হবে। ফাইনালি তুমি যদি ৩০% বা তার নিচে বুঝো তাহলে নেক্সট পাঁচ-ছয়দিন ভালো করে জাভাস্ক্রিপ্ট এ সিরিয়াসলি সময় দাও। তাহলে React এ গেলে তোমার লাইফ অনেক ইজি হয়ে যাবে। 
