let P=[];    //dari solve()
let t=[];  //dari solve()
let r;    //materi kelas: input user
let K;       //tugas: r dan k input user


//ini bisa juga jadi input
let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik;  //chart js

function setup() {
  createCanvas(400, 400);
  
  r = createInput("0.8");  //input default adalah 0,8
  r.position(20,400)
  let p = createP('konstanta pertumbuhan')  //teks biasa
  p.style('fontsize', '14px');
  p.position(20, 365);
  K = createInput("300")
  K.position(200,400)
  let k = createP('carrying capacity')
  k.style('fontsize', '14px');
  k.position(200, 365);


  grafik= new Chart(this, config);
  
  
  //baris program untuk merespon input user
  solve();   //untuk inisiasi jalankan 
  r.changed(solve);
  K.changed(solve);
  
}

function draw() {
  background(220);
  
  grafik.update();
}

function solve(){
  P[0]=P0;
  t[0]=0;
  let rs = float(r.value());
  let Ks = float(K.value());
  let iterNum = int(tMax/dt);
  
  for (i=0; i< iterNum; i++){
    P[i+1]=P[i]+dt*rs*P[i]*(1-P[i]/Ks)
    t[i+1]= (i+1)*dt
    
  }
}