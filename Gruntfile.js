'use strict';

module.exports = function(grunt){
  var PKG = grunt.file.readJSON('package.json');
  var INFO = {
    author: PKG.author,
    license: PKG.license,
    version: PKG.version,
    company: 'Serifx Xiao'
  };

  /* configuration
     ========================================================================== */
  var CONFIG = {
    common: {
      path: {
        built: 'src/built/',
        dist: {
          root: './dist/',
          assets: {
            core: 'dist/assets/core/'
          },
          views: './views/'
        },
        server: './'
      },
      browsers: ['last 2 versions', 'chrome >= 5%', 'firefox >= 5%', 'ie 8', 'ie 9', 'ie 10', 'ie 11', 'edge 12']
    }
  };

  /* Components
     ========================================================================== */
  CONFIG.components = {
    js: {
      /**
       * utils
       * ==================================================
       */
      utils: {
        built: {
          path : CONFIG.common.path.built + 'js/',
          src: 'src/js/utilities/**/*.js',
          files: {
            max: CONFIG.common.path.built + 'js/utils.js',
            min: CONFIG.common.path.built + 'js/utils.min.js'
          }
        },
        dist: {
          path: CONFIG.common.path.dist.assets.core + 'js/',
          files: {
            max: CONFIG.common.path.dist.assets.core + 'js/utils.js',
            min: CONFIG.common.path.dist.assets.core + 'js/utils.min.js'
          }
        },
        banner: '/*!' +
                '\n* Site Utilities' +
                '\n*' +
                '\n* Author: <%= pkg.author %>' +
                '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
                '\n* Version: <%= pkg.version %>' +
                '\n*' +
                '\n* Copyright (c) <%= grunt.template.today("yyyy") %> ' + INFO.company +
                '\n* Licensed under the <%= pkg.license %> license' +
                '\n*/\n'
      },
      /**
       * models
       * ==================================================
       */
      models: {
        built: {
          path : CONFIG.common.path.built + 'js/',
          src: 'src/assets/js/models.js',
          files: {
            max: CONFIG.common.path.built + 'js/models.js',
            min: CONFIG.common.path.built + 'js/models.min.js'
          }
        },
        dist: {
          path: CONFIG.common.path.dist.assets.core,
          files: {
            max: CONFIG.common.path.dist.assets.core + 'js/models.js',
            min: CONFIG.common.path.dist.assets.core + 'js/models.min.js'
          }
        },
        banner: '/*!' +
                '\n* Site Models' +
                '\n*' +
                '\n* Author: <%= pkg.author %>' +
                '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
                '\n* Version: <%= pkg.version %>' +
                '\n*' +
                '\n* Copyright (c) <%= grunt.template.today("yyyy") %> ' + INFO.company +
                '\n* Licensed under the <%= pkg.license %> license' +
                '\n*/\n'
      },
      /**
       * controllers
       * ==================================================
       */
      controllers: {
        built: {
          path : CONFIG.common.path.built + 'js/',
          src: [
            'src/assets/js/controllers.js',
            'src/components/**/*.js'
          ],
          files: {
            max: CONFIG.common.path.built + 'js/controllers.js',
            min: CONFIG.common.path.built + 'js/controllers.min.js'
          }
        },
        dist: {
          path: CONFIG.common.path.dist.assets.core,
          files: {
            max: CONFIG.common.path.dist.assets.core + 'js/utils.js',
            min: CONFIG.common.path.dist.assets.core + 'js/utils.min.js'
          }
        },
        banner: '/*!' +
                '\n* Site Controllers' +
                '\n*' +
                '\n* Author: <%= pkg.author %>' +
                '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
                '\n* Version: <%= pkg.version %>' +
                '\n*' +
                '\n* Copyright (c) <%= grunt.template.today("yyyy") %> ' + INFO.company +
                '\n* Licensed under the <%= pkg.license %> license' +
                '\n*/\n'
      }
    },
    css: {
      /**
       * basic
       * ==================================================
       */
      basic: {
        built: {
          path : CONFIG.common.path.built + 'css/',
          src: [
            'src/assets/css/normalize.css',
            'src/assets/css/uniform.css',
            'src/assets/css/helper.css'
          ],
          files: {
            max: CONFIG.common.path.built + 'css/basic.css',
            min: CONFIG.common.path.built + 'css/basic.min.css'
          }
        },
        dist: {
          path: CONFIG.common.path.dist.assets.core + 'css/',
          files: {
            max: CONFIG.common.path.dist.assets.core + 'css/basic.css',
            min: CONFIG.common.path.dist.assets.core + 'css/basic.min.css'
          }
        },
        banner: '/*!' +
                '\n* Basic Style, including HTML5-Boilerplate and Helper.css' +
                '\n*' +
                '\n* Author: <%= pkg.author %>' +
                '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
                '\n* Version: <%= pkg.version %>' +
                '\n*' +
                '\n* Copyright (c) <%= grunt.template.today("yyyy") %> ' + INFO.company +
                '\n* Licensed under the <%= pkg.license %> license' +
                '\n*/\n'
      },
      /**
       * core
       * ==================================================
       */
      core: {
        built: {
          path : CONFIG.common.path.built + 'css/',
          src: [
            'src/components/**/*.less',
            'src/components/**/*.css'
          ],
          files: {
            maxLess: CONFIG.common.path.built + 'css/core.less',
            max: CONFIG.common.path.built + 'css/core.css',
            min: CONFIG.common.path.built + 'css/core.min.css'
          }
        },
        dist: {
          path: CONFIG.common.path.dist.assets.core + 'css/',
          files: {
            max: CONFIG.common.path.dist.assets.core + 'css/core.css',
            min: CONFIG.common.path.dist.assets.core + 'css/core.min.css'
          }
        },
        banner: '/*!' +
                '\n* Site Core Style' +
                '\n*' +
                '\n* Author: <%= pkg.author %>' +
                '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
                '\n* Version: <%= pkg.version %>' +
                '\n*' +
                '\n* Copyright (c) <%= grunt.template.today("yyyy") %> ' + INFO.company +
                '\n* Licensed under the <%= pkg.license %> license' +
                '\n*/\n'
      }
    }
  };

  // Utilities
  var js_utils = {
    options: {
      concat: {
        //sourceMap: false,
        banner: CONFIG.components.js.utils.banner
      },
      uglify: {
        mangle: true, // enable changes to variable and function names,
        compress: true,
        ASCIIOnly: true,
        preserveComments: false, // false, 'some', 'all',
        mangleProperties: true,
        reserveDOMProperties: true,
        //drop_console: true, // discard calls to console.* functions,
        sourceMap: true,
        banner: CONFIG.components.js.utils.banner
      }
    },
    files: {
      uglify: {}
    }
  };
  // files
  js_utils.files.uglify[CONFIG.components.js.utils.built.files.min] = CONFIG.components.js.utils.built.files.max;

  // Models
  var js_models = {
    options: {
      concat: {
        //sourceMap: false,
        banner: CONFIG.components.js.models.banner
      },
      uglify: {
        mangle: true, // enable changes to variable and function names,
        compress: true,
        ASCIIOnly: true,
        preserveComments: false, // false, 'some', 'all',
        mangleProperties: true,
        reserveDOMProperties: true,
        //drop_console: true, // discard calls to console.* functions,
        sourceMap: true,
        banner: CONFIG.components.js.models.banner
      }
    },
    files: {
      uglify: {}
    }
  };
  // files
  js_models.files.uglify[CONFIG.components.js.models.built.files.min] = CONFIG.components.js.models.built.files.max;

  // Controllers
  var js_controllers = {
    options: {
      concat: {
        //sourceMap: false,
        banner: CONFIG.components.js.controllers.banner
      },
      uglify: {
        mangle: true, // enable changes to variable and function names,
        compress: true,
        ASCIIOnly: true,
        preserveComments: false, // false, 'some', 'all',
        mangleProperties: true,
        reserveDOMProperties: true,
        //drop_console: true, // discard calls to console.* functions,
        sourceMap: true,
        banner: CONFIG.components.js.controllers.banner
      }
    },
    files: {
      uglify: {}
    }
  };
  // files
  js_controllers.files.uglify[CONFIG.components.js.controllers.built.files.min] = CONFIG.components.js.controllers.built.files.max;

  // CSS Basic
  var css_basic = {
    options: {
      concat: {
        banner: CONFIG.components.css.basic.banner
      },
      cssmin: {
        keepSpecialComments: 1,
        banner: CONFIG.components.css.basic.banner
      }
    },
    files: {
      cssmin: {}
    }
  };
  css_basic.files.cssmin[CONFIG.components.css.basic.built.files.min] = CONFIG.components.css.basic.built.files.max;

  // CSS Core
  var css_core = {
    options: {
      concat: {
        banner: CONFIG.components.css.core.banner
      },
      less: {
        max: {
          compress: false,
          ieCompact: true
        },
        min: {
          compress: true,
          ieCompact: true,
          banner: CONFIG.components.css.core.banner
        }
      },
      cssmin: {
        keepSpecialComments: 1,
        banner: CONFIG.components.css.core.banner
      }
    },
    files: {
      less: {
        max: {},
        min: {}
      },
      prefix: {},
      cssmin: {}
    }
  };
  css_core.files.less.max[CONFIG.components.css.core.built.files.max] = CONFIG.components.css.core.built.files.maxLess;
  css_core.files.less.min[CONFIG.components.css.core.built.files.min] = CONFIG.components.css.core.built.files.maxLess;
  css_core.files.prefix[CONFIG.components.css.core.built.files.max] = CONFIG.components.css.core.built.files.max;
  css_core.files.cssmin[CONFIG.components.css.core.built.files.min] = CONFIG.components.css.core.built.files.max;


  /* Grunt初始化
     ========================================================================== */
  grunt.initConfig({
    pkg: PKG,

    /**
     * 1. JS & CSS 合并
     * ======================================================================================
     */
    concat: {
      /**
       * JS Utilities
       */
      JS_utils: {
        options: js_utils.options.concat,
        src: CONFIG.components.js.utils.built.src,
        dest: CONFIG.components.js.utils.built.files.max
      },
      /**
       * JS Models
       */
      JS_models: {
        options: js_models.options.concat,
        src: CONFIG.components.js.models.built.src,
        dest: CONFIG.components.js.models.built.files.max
      },
      /**
       * JS Controllers
       */
      JS_controllers: {
        options: js_controllers.options.concat,
        src: CONFIG.components.js.controllers.built.src,
        dest: CONFIG.components.js.controllers.built.files.max
      },
      /**
       * CSS Basic
       */
      CSS_basic: {
        options: css_basic.options.concat,
        src: CONFIG.components.css.basic.built.src,
        dest: CONFIG.components.css.basic.built.files.max
      },
      /**
       * CSS Core
       */
      CSS_core: {
        options: css_core.options.concat,
        src: CONFIG.components.css.core.built.src,
        dest: CONFIG.components.css.core.built.files.maxLess
      }
    },

    /**
     * 2. JS压缩
     * ======================================================================================
     */
    uglify: {
      /**
       * JS Utilities
       */
      JS_utils: {
        options:js_utils.options.uglify,
        files: js_utils.files.uglify
      },
      /**
       * JS Models
       */
      JS_models: {
        options: js_models.options.uglify,
        files: js_models.files.uglify
      },
      /**
       * JS Controllers
       */
      JS_controllers: {
        options: js_controllers.options.uglify,
        files: js_controllers.files.uglify
      }
    },

    /**
     * 3. CSS编译
     * ======================================================================================
     */
    less: {
      CSS_core_MAX: {
        options: css_core.options.less.max,
        files: css_core.files.less.max
      }/*,
      CSS_core_MIN: {
        options: css_core.options.less.min,
        files: css_core.files.less.min
      }*/
    },

    /**
     * 4. CSS处理
     * ======================================================================================
     */
    autoprefixer: {
      /**
       * CSS Core
       */
      CSS_core: {
        options: {
          browsers: CONFIG.common.browsers
        },
        files: css_core.files.prefix
      }
    },
    /**
     * 5. 压缩 CSS
     * ======================================================================================
     */
    cssmin: {
      /**
       * CSS Basic
       */
      CSS_basic: {
        options: css_basic.options.cssmin,
        files: css_basic.files.cssmin
      },
      /**
       * CSS Core
       */
      CSS_core: {
        options: css_core.options.cssmin,
        files: css_core.files.cssmin
      }
    },

    /**
     * 6. 复制 HTML
     * ======================================================================================
     */
    copy: {
      /**
       * HTML Components
       */
      components: {
        files: [
          { src: ['src/components/**/*.html'], dest: CONFIG.common.path.dist.root + '/components/', expand: true, flatten: true, filter: 'isFile' }
        ]
      },
      js: {
        files: [
          { src: [CONFIG.common.path.built + '/js/*'], dest: CONFIG.common.path.dist.assets.core + '/js/', expand: true, flatten: true }
        ]
      },
      css: {
        files: [
          { src: [CONFIG.common.path.built + '/css/*.css', CONFIG.common.path.built + '/css/*.css.map'],
            dest: CONFIG.common.path.dist.assets.core + '/css/', expand: true, flatten: true }
        ]
      }
    },

    /**
     * 7. 服务器中浏览
     * ======================================================================================
     */
    connect: {
      server: {
        options: {
          port: 8001,
          livereload: 8002,  //声明给 watch 监听的端口
          keepalive: false,
          base: CONFIG.common.path.server,
          hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
          open: {
            target: 'http://localhost:8001/views', // target url to open
            //appName: 'pool', // name of the app that opens, ie: open, start, xdg-open
            callback: function() { console.log('Welcome to my server!') } // called when the app has opened
          }
        }
      }
    },

    /**
     * 8. 实时监测
     * ======================================================================================
     */
    watch: {
      components: {
        files: [
          'src/components/**/*',
          'src/assets/**/*'
        ],
        tasks: ['components'],
        options: {
          interrupt: true,
          debounceDelay: 1000,
          reload: true,
          livereload: true
        }
      },
      views: {
        files: CONFIG.common.path.server + '*',
        options: {
          interrupt: true,
          debounceDelay: 1000,
          reload: true,
          livereload: '<%=connect.server.options.livereload %>' // connect server
        }
      },
      assets: {
        files: [
          'src/components/**/*.less',
          'src/components/**/*.css',
          'src/assets/css/*.less',
          'src/assets/css/*.css',
          'src/assets/js/controllers.js'
        ],
        tasks: ['build_css_core', 'copy:css', 'build_js_controllers', 'copy:js'],
        options: {
          interrupt: true,
          debounceDelay: 1000,
          reload: true,
          livereload: true
        }
      }
    }
  });


  /* 载入插件
     ========================================================================== */
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less'); // compile less file
  grunt.loadNpmTasks('grunt-autoprefixer'); // before minify
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // only minify
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect'); // connect to local server


  /* 注册(组装)任务
     ========================================================================== */

  // CSS编译处理(仅编译不发布)
  grunt.registerTask('build_css_basic', ['concat:CSS_basic', 'cssmin:CSS_basic']);
  grunt.registerTask('build_css_core', ['concat:CSS_core', 'less:CSS_core_MAX', 'autoprefixer:CSS_core', 'cssmin:CSS_core']);
  grunt.registerTask('build_CSS', ['build_css_basic', 'build_css_core']); // all css

  // JS编译处理(仅编译不发布)
  grunt.registerTask('build_js_utils', ['concat:JS_utils', 'uglify:JS_utils']);
  grunt.registerTask('build_js_models', ['concat:JS_models', 'uglify:JS_models']);
  grunt.registerTask('build_js_controllers', ['concat:JS_controllers', 'uglify:JS_controllers']);
  grunt.registerTask('build_JS', ['build_js_utils','build_js_models','build_js_controllers']); // all js

  /**
    Group tasks(编译后发布)
    ========================================================================== */

  // css and js
  grunt.registerTask('assets', ['build_JS', 'build_CSS', 'copy:js', 'copy:css']);
  // css、js and html
  grunt.registerTask('components', ['build_JS','build_css_core', 'copy:js', 'copy:css', 'copy:components']);

  /* Server
   ========================================================================== */
  grunt.registerTask('browse', ['connect:server', 'watch:assets']);

  // all tasks
  grunt.registerTask('default', ['build_CSS', 'build_JS', 'copy:js', 'copy:css', 'copy:components', 'browse']);

};
