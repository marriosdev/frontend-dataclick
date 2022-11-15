<template>
   <nav class="nav-extended blue-grey">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Data Click</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="">Usuários</a></li>
        <li><a href="">Clubes</a></li>
      </ul>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="" class="left"><strong>Sair</strong></a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav blue-grey" id="mobile-demo">
    <li><a href="/usuarios" class="white-text">Usuários</a></li>
    <li><a href="/clubes" class="white-text">Clubes</a></li>
    <li><a href="" class="white-text"><strong>Sair</strong></a></li>
  </ul>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>


