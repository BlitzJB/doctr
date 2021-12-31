Search.setIndex({docnames:["changelog","datasets","documents","index","installing","models","transforms","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog.rst","datasets.rst","documents.rst","index.rst","installing.rst","models.rst","transforms.rst","utils.rst"],objects:{"doctr.datasets":{CORD:[1,0,1,""],FUNSD:[1,0,1,""],OCRDataset:[1,0,1,""],SROIE:[1,0,1,""],encode_sequences:[1,1,1,""]},"doctr.datasets.core":{VisionDataset:[1,0,1,""]},"doctr.datasets.loader":{DataLoader:[1,0,1,""]},"doctr.documents":{Artefact:[2,0,1,""],Block:[2,0,1,""],Document:[2,0,1,""],DocumentFile:[2,0,1,""],Line:[2,0,1,""],PDF:[2,0,1,""],Page:[2,0,1,""],Word:[2,0,1,""],read_html:[2,1,1,""],read_img:[2,1,1,""],read_pdf:[2,1,1,""]},"doctr.documents.Document":{show:[2,2,1,""]},"doctr.documents.DocumentFile":{from_images:[2,2,1,""],from_pdf:[2,2,1,""],from_url:[2,2,1,""]},"doctr.documents.PDF":{as_images:[2,2,1,""],get_artefacts:[2,2,1,""],get_words:[2,2,1,""]},"doctr.documents.Page":{show:[2,2,1,""]},"doctr.models.detection":{db_resnet50:[5,1,1,""],detection_predictor:[5,1,1,""],linknet:[5,1,1,""]},"doctr.models.export":{convert_to_fp16:[5,1,1,""],convert_to_tflite:[5,1,1,""],quantize_model:[5,1,1,""]},"doctr.models.recognition":{crnn_vgg16_bn:[5,1,1,""],recognition_predictor:[5,1,1,""],sar_resnet31:[5,1,1,""],sar_vgg16_bn:[5,1,1,""]},"doctr.models.zoo":{ocr_predictor:[5,1,1,""]},"doctr.transforms":{ColorInversion:[6,0,1,""],Compose:[6,0,1,""],LambdaTransformation:[6,0,1,""],Normalize:[6,0,1,""],OneOf:[6,0,1,""],RandomApply:[6,0,1,""],RandomBrightness:[6,0,1,""],RandomContrast:[6,0,1,""],RandomGamma:[6,0,1,""],RandomHue:[6,0,1,""],RandomJpegQuality:[6,0,1,""],RandomSaturation:[6,0,1,""],Resize:[6,0,1,""],ToGray:[6,0,1,""]},"doctr.utils.metrics":{LocalizationConfusion:[7,0,1,""],OCRMetric:[7,0,1,""],TextMatch:[7,0,1,""]},"doctr.utils.metrics.LocalizationConfusion":{summary:[7,2,1,""]},"doctr.utils.metrics.OCRMetric":{summary:[7,2,1,""]},"doctr.utils.metrics.TextMatch":{summary:[7,2,1,""]},"doctr.utils.visualization":{visualize_page:[7,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:function","2":"py:method"},terms:{"0123456789":1,"0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz":1,"02562":[],"0361328125":[],"06640625":[],"0966796875":[],"100":[5,6,7],"1000":5,"1024":5,"108":[],"110":7,"116":[],"123":[],"126":[],"128":5,"131":[],"1357421875":[],"1396484375":[],"1420":[],"150":7,"154":1,"1552":[],"160":[],"1630859375":[],"1684":[],"16bn":[],"1778":[],"1782":[],"185546875":[],"1900":[],"1910":[],"199":5,"1999":[],"200":7,"2003":[],"2012":[],"2013":[],"2015":[],"2019":3,"2021":3,"224":[5,6],"225":6,"229":6,"2504":[],"255":[5,6,7],"256":5,"2710":[],"30595":5,"3232421875":[],"340":[],"3456":[],"3515625":[],"406":6,"456":6,"485":6,"51171875":[],"512":[],"529":[],"533":5,"540":[],"5478515625":[],"580":[],"5810546875":[],"583":[],"595":5,"597":[],"600":[5,7],"611":5,"625":5,"629":[],"630":[],"640":5,"641":[],"652":[],"653":[],"660":5,"664":[],"665":[],"666":[],"672":[],"689":5,"700":5,"701":[],"702":[],"713":[],"721":[],"733":[],"735":[],"745":[],"753":5,"775":[],"780":[],"781":5,"783":[],"789":[],"800":[5,7],"817":[],"8275l":5,"830":5,"856":[],"8564453125":[],"857":[],"860":[],"8603515625":[],"862":[],"863":[],"875":5,"913":[],"914085328578949":[],"917":[],"921":[],"9578408598899841":[],"9949972033500671":[],"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7\u00e0\u00e2\u00e9\u00e8\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7":1,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7":[],"\u00e1\u00e0\u00e2\u00e3\u00e9\u00ea\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7\u00e1\u00e0\u00e2\u00e3\u00e9\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7":[],"\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1":[],"\u00e4\u00f6\u00fc\u00df\u00e4\u00f6\u00fc\u00df":[],"abstract":1,"boolean":[],"byte":[2,5],"case":7,"class":[1,2,6,7],"default":[2,5],"export":[2,3,7],"final":[],"float":[2,6,7],"function":[5,6,7],"import":[1,2,5,6,7],"int":[1,2,5,6],"new":[],"public":3,"return":[1,2,5,7],"static":7,"true":[1,2,5,6,7],"while":6,AWS:[3,5],And:5,EOS:[],FPS:5,For:[4,5],IDs:5,Its:5,The:[1,2,5,7],Then:5,abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz:1,abdef:[],abl:[],about:5,abov:5,accent:[],access:[1,2,3],account:[],accuraci:7,achiev:[],activ:[],add:[6,7],add_label:7,adding:6,addition:5,address:2,adjust:6,after:[],again:[],aggreg:[1,7],align:2,all:[1,2,3,5,6,7],along:5,also:[],analysi:[2,5],angl:2,ani:[1,2,3,5,7],annot:2,anoth:[1,4,5],anyon:3,api:[],appli:[1,6],applic:5,appropri:[],arch:5,architectur:[3,5],archiv:1,arg:[],argument:[1,2],around:5,arrai:[2,7],art:3,artefact:7,artefact_typ:2,arxiv:[],as_imag:2,asarrai:7,ascii_lett:1,aspect:6,assess:7,assign:7,associ:2,assum:[],assume_straight_pag:[],astyp:[5,7],attend:[3,5],attent:[],autoclass:[],autom:3,avail:[3,5,6],averag:[5,6],avoid:[],aws:[],b_j:7,backbon:5,backend:5,base:5,baselin:5,batch:[1,5,6],batch_siz:1,bbox:[],been:[5,7],befor:1,begin:7,being:[5,7],belong:[],below:[],benchmark:[],better:[],between:[6,7],bgr:2,bilinear:[5,6],binar:[3,5],binari:[2,5],blank:[],block:[5,7],block_1_1:[],blue:[],blur:[],bmvc:[],bodi:[],bool:[1,2,5,6,7],both:[3,5,6],bottom:[],bound:[2,5,6,7],box:[2,5,7],brew:4,bright:6,broadcast:[],browser:[],build:[],c_j:[],cach:[],cache_sampl:[],cairo:4,callabl:[1,6],can:[1,4,5],capabl:5,cfg:[],challeng:[],challenge2_test_task12_imag:[],challenge2_test_task1_gt:[],challenge2_training_task12_imag:[],challenge2_training_task1_gt:[],changelog:3,channel:[2,5,6],channelshuffl:[],charact:[1,2,3,5,7],charactergener:[],charg:5,charset:[],chart:2,check:[],classif:5,classif_mobilenet_v3_smal:[],classmethod:2,clone:4,code:[2,3],collate_fn:[],collect:2,color:6,colorinvers:6,column:2,com:[2,4],combin:5,common:[6,7],compar:3,comparison:7,competit:1,compil:[],complementari:7,compon:5,compos:[1,3,5],comprehens:[],comput:[5,7],conda:[],confid:2,confus:7,consecut:[5,6],consid:[2,7],consist:[],consolid:[1,3],constant:6,constraint:[],consum:[],contain:[],content:[1,2],context:[],contrast:6,contrast_factor:6,conv_sequ:5,convers:2,convert:[2,5,6],convert_page_to_numpi:2,convert_to_fp16:5,convert_to_tflit:5,convolut:3,coordin:2,cord:[1,3,5],core:[1,5,7],corner:[],correct:6,correspond:5,counterpart:7,cpu:[3,5],crnn:[3,5],crnn_mobilenet_v3_larg:[],crnn_mobilenet_v3_smal:[],crnn_resnet31:5,crnn_vgg16_bn:5,crnn_vgg16_bn_predictor:[],crop:5,crop_orientation_predictor:[],croporientationpredictor:[],currenc:1,current:[],cvit:[],daili:3,data:[2,3,5,6,7],dataload:1,dataset:5,date:[],db_crnn_resnet:5,db_crnn_vgg:5,db_mobilenet_v3_larg:[],db_resnet50:5,db_resnet50_predictor:[],db_sar_resnet:5,db_sar_vgg:5,dbnet:[3,5],decod:2,decode_img_as_tensor:[],deep:5,def:[],defer:1,defin:7,deform:5,degre:[],degress:2,delimit:[],delta:6,demo:[],depend:[3,4],deploy:[],describ:5,descript:[],design:6,desir:[],det_arch:5,detail:[],detect:[],detection_predictor:5,detectiondataset:[],detectionmetr:[],detectionpredictor:5,develop:[],developp:4,deviat:6,dict:[2,7],dictionari:[2,7],differenti:[3,5],differentiable_binar:5,digit:1,dimens:[2,5,7],dimension:6,direct:[],directli:5,disclaim:5,disk:1,displai:[2,7],display_artefact:7,distanc:[],distribut:6,div:[],divid:[],doc:[2,5],docartefact:[],doctr:4,document:[1,5,7],documentfil:2,don:[],done:6,download:1,downsiz:[],draw:6,draw_proba:[],drop:1,drop_last:1,dtype:5,dummy_img:[],dynam:[],dynamic_seq_length:[],each:[1,2,3,5,6,7],easi:[3,7],easier:5,easili:[2,5,7],effici:[1,5],either:5,element:[1,2,5],enabl:2,enclos:2,encod:[1,2,5],encode_sequ:1,end:[1,3,7],engin:5,english:[],enhanc:[],enough:5,entir:2,entri:[],eos:1,equiv:[],error:[],etc:2,evalu:[1,3,5],everyth:[],exact:7,exactmatch:[],exampl:[1,2,5,6,7],exclud:5,expand:[],expect:[1,2,5,6],experi:5,explan:5,exploit:5,export_as_straight_box:[],export_as_xml:[],express:6,extens:2,extra:4,extract:[1,3],extract_arch:1,extractor:5,f_a:7,factor:6,fallback:[],fals:[1,5,6],famili:[],fast:1,favorit:[],featur:[5,7],feed:5,few:4,figsiz:7,figur:7,file:[1,3],file_hash:1,file_nam:1,file_path:[],find:4,fine:3,firsthand:[],fit:[],fitz:2,flag:[],flexibl:7,float16:[],float32:5,focus:[],folder:[1,5],follow:[4,5,6,7],font:[],font_famili:[],font_siz:[],foral:7,form:[1,3],format:[2,5],forpost:[1,3],fp16:5,frac:7,frame:5,framework:[1,6],french:[1,5],friendli:3,from:[1,2,3,5,6,7],from_imag:2,from_keras_model:[],from_pdf:2,from_url:2,full:[1,5,7],fulli:[],funsd:[1,3,5],futur:[],g_x:7,gamma:6,gaussian:6,gaussianblur:[],gaussiannois:[],gdk:4,gener:[],geometri:2,geq:7,german:[],get:2,get_artefact:2,get_lin:[],get_text_word:[],get_word:2,gettextword:2,git:3,github:4,given:[1,2,5,7],global:[],good:[],googl:[],googlevis:3,gpu:3,graph:2,grayscal:6,ground:7,groung:[],group:[],gt_box:[],gt_label:[],gtk:4,gts:[],guidanc:[],gvision:5,half:5,handl:1,has:[1,7],hat:7,have:[1,5,7],head:[],height:2,hello:7,help:[],here:[1,4,6],high:2,higher:4,hocr:[],homebrew:[],horizont:2,hous:[],how:[],howev:[],hsv:6,html:[],http:[2,4],hue:6,ic03:[],ic13:[],icdar2019:1,icdar:3,identifi:[3,5],ignor:[],ignore_acc:[],ignore_cas:[],iiit5k:[],iiit:[],imag:[1,2,5,6,7],imagenet:[],img:[1,6],img_cont:[],img_fold:1,img_path:[],img_transform:[],implement:[1,2,5,6,7],includ:[4,5],increas:6,index:2,indic:7,infer:[3,6],inference_input_typ:[],inference_output_typ:[],inform:[1,3,5],inherit:[1,5],input:[2,5,6],input_crop:[],input_pag:[5,7],input_shap:5,input_t:5,input_tensor:5,inspir:6,instal:3,instanc:5,instanti:5,instead:2,int64:[],int8:[],integ:7,integr:3,interact:[2,7],interpol:[5,6],interpret:[1,2],intersect:7,invert:6,invoic:5,involv:5,iou:7,iou_thresh:7,irregular:5,isn:1,iter:1,its:[1,2,5,7],jpeg:6,jpegqual:6,jpg:[1,2],json:[],json_output:[],just:5,kera:5,kernel:[],kernel_s:5,kernel_shap:[],keyword:[1,2],kwarg:[1,2,5,7],l_j:7,label:[1,7],label_fil:1,label_fold:[],label_path:[],labels_path:[],lambda:6,lambdatransform:6,lang:[],languag:[2,3],larg:[],largest:7,last:[1,4,5],latest:4,latin:1,layout:[],learn:5,least:[],left:7,legacy_french:[],length:1,let:5,letter:[],level:[5,7],levenshtein:[],leverag:[],libffi:4,librari:4,light:3,limits_:7,line:[3,7],line_1_1:[],linknet:[3,5],linknet_resnet18:[],linux:4,list:[1,2,6],load:[3,5],loader:1,local:[1,3,5,7],localis:[],localizationconfus:7,locat:[],logo:2,look:[],lower:[6,7],maco:4,made:3,magc_resnet31:[],mai:[],main:[],maintain:3,make:[5,7],mani:[],map:[1,5],mask_shap:[],master:[],match:[3,7],mathcal:7,matplotlib:7,max:7,max_angl:[],max_area:[],max_char:[],max_delta:6,max_dist:[],max_gain:6,max_gamma:6,max_qual:6,max_ratio:[],maximum:1,maxval:[5,6],mbox:7,mean:[6,7],meaniou:7,meant:2,measur:5,memori:[],meta:[],method:6,metric:[5,7],might:5,min:[],min_area:[],min_char:[],min_gain:6,min_gamma:6,min_qual:6,min_ratio:[],min_val:6,minde:4,minim:[],minimum:7,minval:6,miss:[],mix:3,mobilenet:[],mobilenet_v3_larg:[],mobilenet_v3_large_r:[],mobilenet_v3_smal:[],mobilenet_v3_small_orient:[],mobilenet_v3_small_r:[],mobilenetv3:[],mobilenetv3_larg:[],mobilenetv3_smal:[],mode:4,model:[1,7],modifi:[],modul:[2,5,6,7],moment:[],more:[],most:5,multi:[],multipl:[1,2,6],multipli:6,name:[1,5],natur:3,ndarrai:[1,2,7],necessari:[],need:[4,7],neg:6,nest:[],nestedobject:6,network:[3,5],neural:[3,5],newer:[],next:1,nois:[],noisi:[1,3],non:[2,6,7],none:[1,2],normal:[5,6],note:[0,3],num_output_channel:[],num_sampl:[],num_work:[],number:[1,6,7],numpi:[1,2,5,7],object:1,obtain:[],ocr:[1,3,7],ocr_carea:[],ocr_db_crnn:7,ocr_db_crnn_vgg:[],ocr_db_sar_resnet:[],ocr_db_sar_vgg:[],ocr_lin:[],ocr_pag:[],ocr_par:[],ocr_predictor:5,ocrdataset:1,ocrmetr:7,ocrpredictor:5,ocrx_word:[],offset:6,onc:[1,5],one:[1,5,6],oneof:6,ones:[],onli:[6,7],oper:[],ops:[1,6],opsset:[],optic:[3,5],optim:3,option:[1,2],order:[1,2,5],org:[],organ:2,orient:2,otherwis:7,our:5,out:[5,6,7],outpout:[],output:[2,6],output_s:[2,6],over:[4,7],overlai:2,overwrit:1,own:3,packag:[3,7],pad:[1,5,6],page1:2,page2:2,page:[5,7],page_1:[],page_idx:2,pair:7,pango:4,paper:[],par_1_1:[],param:[5,6],paramet:[1,2,3,5,6,7],pars:[1,3],part:6,parti:[],pass:[1,5],path:[1,2,5],pathlib:2,pdf:2,per:[5,6],perform:[2,3,5,6,7],person:[],phase:[],physic:2,pick:6,pictur:2,pip:4,pixbuf:4,pixel:[2,6],platinum:5,plot:7,plt:7,png:2,polygon:[],pool:[],portugues:[],posit:7,possibl:7,post:[],postprocessor:[],potenti:5,power:3,ppageno:[],pre:[],precis:[5,7],pred:[],pred_box:[],pred_label:[],predefin:1,predict:[2,7],predictor:[],prefer:1,preprocessor:5,prerequisit:3,present:1,preserv:6,preserve_aspect_ratio:6,pretrain:[3,5,7],print:[],prior:[],privat:5,probabl:6,procedur:6,process:[2,3],processor:5,produc:5,product:[],project:[],properli:1,properti:5,provid:[3,5],publicli:[],punctuat:1,purpos:5,pyplot:7,python:[1,3,6],pytorch:[],qualiti:6,quantiz:5,quantize_model:5,quickli:3,quicktour:[],rand:[5,7],random:[5,6,7],randomappli:6,randombright:6,randomcontrast:6,randomcrop:[],randomgamma:6,randomhu:6,randomjpegqu:6,randomli:6,randomrot:[],randomsatur:6,rang:6,ratio:6,raw:[2,7],read:[3,5],read_html:2,read_img:2,read_img_as_numpi:[],read_img_as_tensor:[],read_pdf:2,reader:2,readi:[],real:[5,6],recal:[5,7],receipt:[1,3,5],reco_arch:5,recognit:7,recognition_predictor:5,recognitiondataset:[],recognitionpredictor:5,rectangular:[],recurr:3,red:[],reduc:6,refer:3,regroup:7,rel:2,relat:[],releas:[0,4],relu:5,repositori:[],repr:6,repres:[2,5],represent:5,representative_dataset:[],requir:[4,6],research:3,residu:[],resiz:[5,6],resnet18:[],resnet31:[],resnet:5,resolv:2,resourc:[],respons:[],rest:[6,7],result:[2,5],resum:[],reusabl:5,rgb:[2,6],rgb_output:2,right:[5,7],rnn:[],road:[],robust:3,root:1,rotat:2,run:4,same:[2,7],sampl:1,sample_transform:1,sar:[3,5],sar_resnet31:5,sar_resnet31_predictor:[],sar_vgg16_bn:5,sar_vgg16_bn_predictor:[],satur:6,save:[1,5],saved_model:5,scale:7,scan:[1,3],scene:5,scheme:5,score:7,scratch:3,seamless:3,seamlessli:[],search:[],searchabl:[],second:5,section:[],seemlessli:3,seen:5,segment:5,semant:5,sens:7,sensit:[],separ:5,sequenc:[1,2,5,7],sequenti:[5,6],serial:5,serialized_model:5,set:[1,5,7],sever:[2,6],sha256:1,shape:[2,5,6,7],share:[],shift:6,should:[1,2,7],show:[2,3,5,7],shuffl:1,side:7,signatur:2,signific:1,simpl:5,simpler:[],sinc:1,size:[1,2,5,6],small:3,smallest:2,some:[],sos:[],sourc:[1,2,5,6,7],span:[],spanish:[],spatial:2,special:3,specif:[1,5,7],specifi:2,speed:[3,5],sroie:[1,3],stabl:4,stage:3,standard:6,start:[],state:3,statist:5,std:6,str:[1,2,5,6,7],straight:[],stream:2,street:[],strictli:7,string:[1,2,5,7],strive:[],strong:5,structur:[3,5],subset:[1,5],sum:7,summari:7,support:5,supported_op:[],supported_typ:[],svhn:[],svt:[],symbol:5,symmetr:6,symmetric_pad:6,synthes:[],synthesize_pag:[],synthtext:[],system:[],take:[],target:[1,2,5,6],target_s:1,target_spec:[],task2:[],task:[1,3,5],tax:[],templat:2,tensor:[1,5,6],tensorflow:[1,3,5,6],test_set:[],text:[2,7],textmatch:7,textract:[3,5],textual:[1,2,3],tf_model:5,tflite:5,tflite_builtins_int8:[],tfliteconvert:[],than:[4,7],thei:[],them:[1,4],thi:[4,5,7],thing:[],third:[],those:[2,4,5],through:[1,6],time:[1,5,7],titl:2,togeth:[2,5],tograi:6,tool:[],top:7,torch:[],torchvis:6,toward:[],train:[1,5,6],train_it:1,train_load:1,train_set:1,trainabl:5,tranform:6,transcrib:[],transfo:6,transform:[1,3],truth:7,tune:3,tupl:[2,5,6,7],turn:5,two:2,type:[2,5],typic:[],ucsd:[],uint8:[2,5,7],underli:1,underneath:2,understand:[1,3],unfortun:[],unidecod:7,uniform:[5,6],uniformli:[],uninterrupt:2,union:[2,7],unsupervis:[],updat:7,upper:6,url:[1,2],usabl:5,usag:5,use:[1,5,7],use_broadcast:[],use_polygon:[],useabl:[],used:5,user:[2,3,4],uses:[],using:[1,4,5],utf:[],util:[3,5,6],valu:[2,6],valuabl:3,varieti:[],variou:[],veri:[],verifi:1,version:5,vgg16:5,vgg16_bn_r:[],vgg:5,via:3,view:[],vision:[],visiondataset:1,visual:3,visualize_pag:7,vocab:[3,5],vocabulari:[],wai:[1,3,5],want:[],warm:5,warmup:[],web:2,websit:[],welcom:3,well:[],were:2,when:[],where:[2,7],whether:[1,2,7],which:5,whichev:[],width:2,window:[4,7],wish:[],without:5,word:[3,5,7],word_1_1:[],word_1_2:[],word_1_3:[],wordgener:[],words_onli:7,worker:1,world:7,wrap:[],wrapper:[1,6],written:2,www:2,x12larg:5,x_ascend:[],x_descend:[],x_i:7,x_size:[],x_wconf:[],xeon:5,xhtml:[],xmax:2,xmin:2,xml:[],xml_bytes_str:[],xml_element:[],xml_output:[],xmln:[],y_i:7,y_j:7,yield:[],ymax:2,ymin:2,you:[4,5],your:[1,2,5,7],yoursit:2,zero:[5,6]},titles:["Changelog","doctr.datasets","doctr.documents","DocTR: Document Text Recognition","Installation","doctr.models","doctr.transforms","doctr.utils"],titleterms:{"2021":0,"export":5,"public":[],Using:5,approach:5,architectur:[],artefact:2,avail:1,block:2,build:3,changelog:0,choos:[],classif:[],compos:6,compress:5,conda:[],content:[],data:1,dataset:[1,3],detect:[3,5],doctr:[1,2,3,5,6,7],document:[2,3],end:5,evalu:7,featur:3,file:2,get:3,git:4,half:[],implement:[],infer:[],instal:4,integr:[],line:2,lite:[],load:1,main:3,model:[3,5],notebook:[],ocr:5,output:5,packag:4,page:2,post:5,pre:5,precis:[],predictor:[3,5],prepar:[],prerequisit:4,privat:[],process:5,python:4,quantiz:[],read:2,recognit:[3,5],right:[],savedmodel:5,should:[],stage:5,start:3,structur:2,support:[1,3,6],synthet:[],task:7,tensorflow:[],text:[3,5],train:3,transform:6,two:5,util:7,via:4,visual:7,vocab:1,what:[],word:2,your:3,zoo:[3,5]}})