document.querySelectorAll('.editable-image').forEach(img => {
    img.onclick = () => {
        const url = prompt('Nhập link ảnh mới:');
        if(url) img.src = url;
    };
});
function showScreen(id) { alert('Bạn vừa bấm vào app: ' + id); }