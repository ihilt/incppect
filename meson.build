project('incppect', default_options : ['default_library=static'])
cmake_export_compile_commands = 'on'
cmake_cxx_standard = '17'
cmake_cxx_standard_required = 'ON'
cmake_module_path = [cmake_current_source_dir, '/cmake']
if 'NOT', 'CMAKE_BUILD_TYPE', 'AND', 'NOT', 'CMAKE_CONFIGURATION_TYPES'
  cmake_build_type = ['Release', 'CACHE', 'STRING', 'Build type', 'FORCE']
  # set_property(['CACHE', 'CMAKE_BUILD_TYPE', 'PROPERTY', 'STRINGS', 'Debug', 'Release', 'RelWithDebInfo'])
endif
Threads_dep = dependency('Threads')
ZLIB_dep = dependency('ZLIB')
if 'APPLE'
  LibUV_dep = dependency('LibUV')
endif
subdir('third_party')
subdir('src')
if 'CMAKE_SOURCE_DIR', 'STREQUAL', 'CMAKE_CURRENT_SOURCE_DIR'
  subdir('examples')
endif
