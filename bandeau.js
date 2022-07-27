    
    function bandeau() {
    bd = document.getElementById('bandeau');
    bd.innerHTML = `<div class="container">
  <div class="card">
    <div class="header">
       <div style"float:left"><u>Menu</u></div><i class="fas fa-angle-down iconM"></i>
    </div>
    <div class="body">
      <ul>
        <a href="https://leagueskins.go.yj.fr/"><li><i class="fas fa-home icon"></i> Acceuil </li></a>
        <li><i class="fab fa-wpforms icon"></i> Patch <div style="float: right">▸</div>
          <ul>
            <a href="https://leagueskins.go.yj.fr/patch/12-12"><li><i class="fab fa-wpforms icon"></i> 12.12 </li></a>
            <a href="https://leagueskins.go.yj.fr/patch/12-13"><li><i class="fab fa-wpforms icon"></i> 12.13 </li></a>
            <a href="https://leagueskins.go.yj.fr/patch/12-14"><li><i class="fab fa-wpforms icon"></i> 12.14 </li></a>
          </ul>
        </li>
        <a href="https://leagueskins.go.yj.fr/skins/2022"><li><i class="fa fa-list-ul icon"></i>  2022 Skins </li></a>
        <li><i class="fa-solid fa-robot icon"></i> Discord Bot <div style="float: right">▸</div> 
          <ul>
            <a href="https://leagueskins.go.yj.fr/bot/status"><li><i class="fa-solid fa-wifi icon"></i>  Status  </li></a>
            <a href="https://leagueskins.go.yj.fr/bot/patch"><li><i class="fab fa-wpforms icon"></i>  Patch  </li></a>
            <a href="https://leagueskins.go.yj.fr/bot/invite"><li><i class="fa fa-plus-circle icon"></i>  Invite </li> </a>
          </ul>
        </li>
        <li><i class="fa-solid fa-calendar"></i> Evénement LFL <div style="float: right">▸</div> 
          <ul>
            <a href="https://leagueskins.go.yj.fr/event/points"><li><i class="fas fa-pencil-alt icon"></i>  Points </li></a>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>`
}