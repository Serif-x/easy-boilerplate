'use strict';

module.exports = function(grunt){
  var _pkg = grunt.file.readJSON('package.json');
  var _info = {
    author: _pkg.author,
    company: '杭州海购网络科技有限公司'
  };
  var _conf = {
    path: {
      built: 'src/built',
      assets: {
        core: 'dist/assets/core'
      },
      views: 'dist/views'
    }
  };

  // Utilities
  var js_utils = {
    src: 'src/utilities/*.js',
    dist: {
      normal: _conf.path.built + '/js/utils.js'
    },
    concatOptions: {
      mangle: true, // enable changes to variable and function names,
      preserveComments: true,
      keepSpecialComments: 1,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: false,
      banner: '/*!' +
      '\n* Site Utilities' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    options: {
      mangle: true, // enable changes to variable and function names,
      preserveComments: false,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: true,
      banner: '/*!' +
      '\n* Site Utilities' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    files: {
      normal: {
        'src/built/js/utils.js': 'src/utilities/*.js'
      },
      min: {
        'src/built/js/utils.min.js': _conf.path.built + '/js/utils.js'
      }
    }
  };

  // Models
  var js_models = {
    src: [
      'src/assets/js/models.js'
    ],
    dist: {
      normal: _conf.path.built + '/js/models.js',
      min: _conf.path.built + '/js/models.min.js'
    },
    concatOptions: {
      beautify: { ascii_only: true /*中文ascii化*/},
      keepSpecialComments: 1,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: false,
      banner: '/*!' +
      '\n* Site Models' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    options: {
      beautify: { ascii_only: true /*中文ascii化*/},
      keepSpecialComments: 0,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: true,
      banner: '/*!' +
      '\n* Site Models' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    files: {
      normal: {
        'src/built/js/models.js': 'src/assets/js/models.js'
      },
      min: {
        'src/built/js/models.min.js': _conf.path.built + '/js/models.js'
      }
    }
  };

  // Controllers
  var js_controllers = {
    src: [
      'src/assets/js/controllers.js',
      'src/components/**/*.js'
    ],
    dist: {
      normal: _conf.path.built + '/js/controllers.js',
      min: _conf.path.built + '/js/controllers.min.js'
    },
    concatOptions: {
      beautify: { ascii_only: true /*中文ascii化*/},
      keepSpecialComments: 1,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: false,
      banner: '/*!' +
      '\n* Site Controllers' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    options: {
      beautify: { ascii_only: true /*中文ascii化*/},
      keepSpecialComments: 0,
      drop_console: true, // discard calls to console.* functions,
      sourceMap: true,
      banner: '/*!' +
      '\n* Site Controllers' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    files: {
      normal: {
        'src/built/js/controllers.js': [
          'src/assets/js/controllers.js',
          'src/components/**/*.js'
        ]
      },
      min: {
        'src/built/js/controllers.min.js': _conf.path.built + '/js/controllers.js'
      }
    }
  };

  // Basic Style
  var css_basic = {
    src: [
      'src/assets/css/normalize.css',
      'src/assets/css/uniform.css',
      'src/assets/css/helper.css'
    ],
    dist: {
      normal: _conf.path.built + '/css/basic.css',
      min: _conf.path.built + '/css/basic.min.css'
    },
    options: {
      beautify: { ascii_only: true /*中文ascii化*/},
      processImport: true,
      mediaMerging: true,
      keepSpecialComments: 1,
      banner: '/*!' +
      '\n* Basic Style, including HTML5-Boilerplate and Helper.css' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    files: {
      normal: {
        'src/built/css/basic.css': [
          'src/assets/css/normalize.css',
          'src/assets/css/uniform.css',
          'src/assets/css/helper.css'
        ]
      },
      min: {
        'src/built/css/basic.min.css': _conf.path.built + '/css/basic.css'
      }
    }
  };

  // Core Style
  var css_core = {
    src: [
      'src/components/**/*.less',
      'src/components/**/*.css'
    ],
    dist: {
      normal: _conf.path.built + '/css/core.css',
      min: _conf.path.built + '/css/core.min.css'
    },
    options: {
      beautify: { ascii_only: true /*中文ascii化*/},
      processImport: true,
      mediaMerging: true,
      keepSpecialComments: 1,
      banner: '/*!' +
      '\n* Site Core Style' +
      '\n*' +
      '\n* Author: <%= pkg.author %>' +
      '\n* Date: <%= grunt.template.today("yyyy/mm/dd") %>' +
      '\n*' +
      '\n* Copyright (c) 2015 ' + _info.company +
      '\n*/\n'
    },
    files: {
      normal: {
        'src/built/css/core.css': [
          'src/components/**/*.less',
          'src/components/**/*.css'
        ]
      },
      min: {
        'src/built/css/core.min.css': _conf.path.built + '/css/core.css'
      }
    }
  };

  grunt.initConfig({
    pkg: _pkg,
    /**
     * 合并 JS
     * ===========================================
     */
    concat: {
      /**
       * JS Utilities
       */
      JS_utils: {
        options: js_utils.concatOptions,
        src: js_utils.src,
        dest: js_utils.dist.normal
      },
      /**
       * JS Models
       */
      JS_models: {
        options: js_models.concatOptions,
        src: js_models.src,
        dest: js_models.dist.normal
      },
      /**
       * JS Controllers
       */
      JS_controllers: {
        options: js_controllers.concatOptions,
        src: js_controllers.src,
        dest: js_controllers.dist.normal
      },
      /**
       * CSS Basic
       */
      CSS_basic: {
        options: css_basic.options,
        src: css_basic.src,
        dest: css_basic.dist.normal
      },
      /**
       * CSS Core
       */
      CSS_core_pre: {
        options: css_core.options,
        src: css_core.src,
        dest: _conf.path.built + '/pre/core.less'
      }
    },
    /**
     * 压缩 JS
     * ===========================================
     */
    uglify: {
      /**
       * JS Utilities
       */
      JS_utils: {
        options: js_utils.options,
        files: js_utils.files.min
      },
      /**
       * JS Models
       */
      JS_models: {
        options: js_models.options,
        files: js_models.files.min
      },
      /**
       * JS Controllers
       */
      JS_controllers: {
        options: js_controllers.options,
        files: js_controllers.files.min
      }
    },
    /**
     * Prefix CSS
     * ===========================================
     */
    autoprefixer: {
      /**
       * CSS Core
       */
      CSS_core: {
        options: {
          browsers: ['last 2 versions', 'chrome >= 5%', 'firefox >= 5%', 'ie 8', 'ie 9', 'ie 10', 'ie 11', 'edge 12']
        },
        files: {
          'src/built/css/core.css': 'src/built/css/core.css'
        }
      }
    },
    /**
     * 压缩 CSS
     * ===========================================
     */
    cssmin: {
      /**
       * CSS Basic
       */
      CSS_basic: {
        options: css_basic.options,
        files: {
          'src/built/css/basic.min.css': 'src/built/css/basic.css'
        }
      },
      /**
       * CSS Core
       */
      CSS_core: {
        options: css_core.options,
        files: {
          'src/built/css/core.min.css': 'src/built/css/core.css'
        }
      }
    },
    /**
     * 合并 & 压缩 CSS
     * ===========================================
     */
    less: {
      CSS_basic_MAX: {
        options: {
          compress: false,
          ieCompat: true,
          optimization: 2,
          banner: css_basic.options.banner
        },
        files: css_basic.files.normal
      },
      CSS_basic_MIN: {
        options: {
          compress: true,
          ieCompat: true,
          optimization: 2,
          banner: css_basic.options.banner
        },
        files: css_basic.files.min
      },
      CSS_core_MAX: {
        options: {
          compress: false,
          ieCompat: true,
          optimization: 2,
          banner: css_core.options.banner
        },
        files: {
          'src/built/css/core.css' : _conf.path.built + '/pre/core.less'
        }
      },
      CSS_core_MIN: {
        options: {
          compress: true,
          ieCompat: true,
          optimization: 2,
          banner: css_core.options.banner
        },
        files: {
          'src/built/css/core.min.css' : _conf.path.built + '/css/core.css'
        }
      }
    },
    /**
     * 复制 HTML
     * ===========================================
     */
    copy: {
      /**
       * HTML Components
       */
      components: {
        files: [
          { src: ['src/components/**/*.html'], dest: _conf.path.views + '/components/', expand: true, flatten: true, filter: 'isFile' }
        ]
      },
      js: {
        files: [
          { src: [_conf.path.built + '/js/*'], dest: _conf.path.assets.core + '/js/', expand: true, flatten: true },
        ]
      },
      css: {
        files: [
          { src: [_conf.path.built + '/css/*'], dest: _conf.path.assets.core + '/css/', expand: true, flatten: true }
        ]
      },
      assets: {
        files: [
          { src: [_conf.path.built + '/js/*'], dest: _conf.path.assets.core + '/js/', expand: true, flatten: true },
          { src: [_conf.path.built + '/css/*'], dest: _conf.path.assets.core + '/css/', expand: true, flatten: true }
        ]
      }
    },
    /**
     * 实时监测
     * ===========================================
     */
    watch: {
      components: {
        files: [
          'src/components/**/*',
          'src/assets/**/*'
        ],
        tasks: ['components'],
        options: {
          liveload: true
        }
      }
    }
  });

  // 载入插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less'); // compile less file
  grunt.loadNpmTasks('grunt-autoprefixer'); // before minify
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // only minify
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // 注册(组装)任务
  // css
  grunt.registerTask('build_css_basic', ['concat:CSS_basic', 'cssmin:CSS_basic']);
  grunt.registerTask('build_css_core', ['concat:CSS_core_pre', 'less:CSS_core_MAX', 'autoprefixer:CSS_core', 'cssmin:CSS_core']);
  grunt.registerTask('build_css_all', ['build_css_basic', 'build_css_core']);

  // js
  grunt.registerTask('build_js_controllers', ['concat:JS_controllers', 'uglify:JS_controllers']);

  grunt.registerTask('build_js_all', ['concat:JS_utils', 'uglify:JS_utils', 'concat:JS_models', 'uglify:JS_models', 'build_js_controllers']);

  // Group tasks
  // css and js
  grunt.registerTask('assets', ['build_css_all', 'build_js_all', 'copy:assets']);
  // css、js and html
  grunt.registerTask('components', ['build_css_core', 'build_js_all', 'copy:assets', 'copy:components']);

  // all tasks
  grunt.registerTask('all', [ 'assets', 'copy:components']);
};
