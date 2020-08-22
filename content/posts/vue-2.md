---
title: Belajar VueJs - Mulai
author: agung-santoso
tags:
  - VueJs
  - FrontEnd
  
excerpt: Program Vue Pertama Kita
date: 2020-07-30T21:58:14.606Z
featuredImage: uploads/vue.jpeg
---

![VueJs](./images/vue.jpeg)

## Menulis Program Vue Pertama Kita

Oke, setelah tools sudah siap mari kita mulai menulis program pertama kita. Kita mulai dengan membuat struktur project kita dulu ya di kode editor masing-masing seperti ini :

```
index.html
app.js
style.css

```

Isi dari Index.html seperti ini :

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar VueJs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app">
        <h2>Nama Saya adalah {{ name }} </h2>
    </div>
</body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="app.js"></script>
</html>

```

Penjelasan kode :
