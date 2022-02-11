const folders = [
	{
		id: 6,
		name: 'Klasör 2',
		files: [
			{ id: 21, name: 'foto.png' },
			{ id: 22, name: 'dosya.xls' },
		],
	},
	{
		id: 7,
		name: 'Klasör 3',
	},
	{
		id: 5,
		name: 'Klasör 1',
		files: [
			{ id: 17, name: 'profil.jpg' },
			{ id: 18, name: 'manzara.jpg' },
		],
	},
];	

// Girilen dosyanin  içinde bulunduğu  klasör indexsini buluyoruz
function folderindex(fileid) {
	const index = folders.find((folder) => folder.files && folder.files.find((file) => file.id === fileid))
	return index;
}
//-------------------------------------------------------------------------

function remove(id) {
  //Silinmesi  istenilen dosyanın indexsini buluyoruz
  const fileindex = folders.findIndex((fid) => fid.id === id)

	const index = folderindex(id)// dosyanın içinde bulunduğu klasör indexsini buluyoruz

	if (index !== -1) {//Klasör bulunduysa 
	
		index.files.splice(fileindex, 1)//Silme işlemini yap

		return "Dosya Silindi"
	}
	return "Dosya Bulunamdı" //Klasör bulunamadıysa hata mesajı ver
}

//--------------------------------------------------------------------------------

function removeFolder(id) {
	//id değeri girilen klasörün indexsini buluyoruz
	const index = folders.findIndex((fid) => fid.id === id)
	if (index !== -1) {//Silinecek klasör varsa silme işlemini yapsın
		folders.splice(index, 1)//silme işlemini yapıyor
		return "Klasör Silindi"
	}
  return "klasör Bulunamadı"
}

//--------------------------------------------------------------------
function parentFolderOf(id) {
	const folder = folderindex(id)//Girilen Dosyanın içinde bulunduğu klasörün idsini buluyoruz
    if(folder){
		return folder.id// id değerini döndürür
	}
	return "Dosya Bulunamadı"
	
}
//----------------------------------------------------------------------
console.log(remove(18));
console.log(removeFolder(5));
console.log(parentFolderOf(22));
