function crousalBox(){
    let imageArray=[];
        let currentImage=null;
        let displayPictureBox=false;

    this.render=()=>{
       
        document.querySelectorAll('img.picture-box').forEach((img_el,index)=>{
            imageArray.push(img_el);
            img_el.setAttribute('data-pictureBox-index',index);
            img_el.addEventListener('click',()=>{
                openPictureBox(img_el)
            });

        });
        addKeyListeners();
        
    }
         let openPictureBox=(img_el)=>{ 
           // hidePictureBox();
            // currentImage=img_el;
            // displayPictureBox=true;
            // let overLay=document.createElement('div');
            // overLay.classList.add('pictureBox-Overlay');
            // let imageContainer=document.createElement('div');
            // imageContainer.classList.add('pictureBox-view');
            // let img=document.createElement('img');
            // img.classList.add('pictureBox-img');
            // img.src=img_el.src;
            // imageContainer.appendChild(img);
            // document.querySelector('body').appendChild(overLay);
            // document.querySelector('body').appendChild(imageContainer);
            // applyControl(img_el);

            if(displayPictureBox){
                currentImage=img_el;
                document.querySelector('.pictureBox-img').src=img_el.src;
            }

            else{
                currentImage=img_el;
                displayPictureBox=true;
                let overLay=document.createElement('div');
                overLay.classList.add('pictureBox-Overlay');
                let imageContainer=document.createElement('div');
                imageContainer.classList.add('pictureBox-view');
                let img=document.createElement('img');
                img.classList.add('pictureBox-img');
                img.src=img_el.src;
                imageContainer.appendChild(img);
                document.querySelector('body').appendChild(overLay);
                document.querySelector('body').appendChild(imageContainer);
                applyControl(img_el);
            }

    }

    let applyControl=(img_el)=>{
        let control=document.createElement('div');
        control.innerHTML+='<span class="box-prev">&#10094;</span><span class="box-next">&#10095;</span><span class="box-close">&times;</span>'
        control.classList.add('pictureBox-control');
        document.querySelector('.pictureBox-view').appendChild(control);

        document.querySelector('.box-prev').addEventListener('click',()=>{
            boxPrevImg();
        })

        document.querySelector('.box-next').addEventListener('click',()=>{
            boxNextImg();
        })
        document.querySelector('.box-close').addEventListener('click',()=>{
            hidePictureBox();
        })
    
    }

    let boxPrevImg=()=>{
        let imgIndex=getCurrrentImageIndex();
        if(imgIndex==0)
        openPictureBox(imageArray[imageArray.length-1]);
        else
        openPictureBox(imageArray[imgIndex-1]);        

    }

    let boxNextImg=()=>{
        let imgIndex=getCurrrentImageIndex();
        if(imgIndex==imageArray.length-1)
        openPictureBox(imageArray[0]);  
        else{
        imgIndex++;
        openPictureBox(imageArray[imgIndex]);     
        }   
    }

let hidePictureBox=()=>{
    let Overlay=document.querySelector('.pictureBox-Overlay');
    let imageContainer=document.querySelector('.pictureBox-view');
    let controls = document.querySelector('.pictureBox-control');

    
    if(controls)
    imageContainer.removeChild(controls);
    if(imageContainer)
    document.querySelector('body').removeChild(imageContainer);
    if(Overlay)
    document.querySelector('body').removeChild(Overlay);
    displayPictureBox=false;

}

    let getCurrrentImageIndex=()=>{
       return  currentImage.getAttribute('data-pictureBox-index');
    }


    function addKeyListeners() {
        document.removeEventListener('keydown', bindKeys);
        document.addEventListener('keydown', bindKeys);
    }

    function bindKeys(e) {
        if (e.keyCode === 37 && displayPictureBox) {
            boxPrevImg();
            return;
        }

        else if (e.keyCode === 39 && displayPictureBox) {
            boxNextImg();
            return;
        }
        else if (e.keyCode === 27 && displayPictureBox) {
            hidePictureBox();
            return;
        }
    }
}

//let Crousal= new pictureBox();
module.export.pictureBox=new CrousalBox();