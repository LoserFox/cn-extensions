(function (Scratch) {
    const vm = Scratch.vm;
    const url = 'https://extensions.turbowarp.cn';
    // 监听消息
    window.addEventListener('message', function (event) {
        if (event.origin !== url) return; // 验证消息来源

        // 如果消息类型为“callFunction”，则执行相应的函数
        if (event.data.type === 'add') {
            loadExtension(event.data.url)
        }
    });
    function loadExtension(TEXT) {
        vm.securityManager.canLoadExtensionFromProject(TEXT)
          .then(function(canLoad) {
            if (canLoad) {
              vm.extensionManager.loadExtensionURL(TEXT);
            }
          })
          .catch(function(error) {
            console.error('Error loading extension:', error);
          });
      }
    class loadext {
        getInfo() {
            return {
                id: 'loadext',
                name: 'loadext',
                blocks: [
                    {
                        opcode: 'open_cnext',
                        text: '打开扩展商店',
                        blockType: Scratch.BlockType.COMMAND
                    },
                ],
            }
        }
        open_cnext() {
            if (typeof(ext) == 'undefined' || ext.closed) {
                ext = window.open(url + '?loadext=1', '_blank', 'width=900,height=600');
            } else {
                ext.focus();
            }
        }
    }
    Scratch.extensions.register(new loadext());
})(Scratch);