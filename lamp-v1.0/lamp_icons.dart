// Place fonts/lamp.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: lamp
//      fonts:
//       - asset: fonts/lamp.ttf
import 'package:flutter/widgets.dart';

class Lamp {
  Lamp._();

  static const String _fontFamily = 'lamp';

  static const IconData esfera_del_dragon_negra = IconData(0xe900, fontFamily: _fontFamily);
  static const IconData esfera_del_dragon = IconData(0xe904, fontFamily: _fontFamily);
  static const IconData signal_dedo_grosero = IconData(0xe907, fontFamily: _fontFamily);
  static const IconData signal_haciendo_el_delicioso_1 = IconData(0xe908, fontFamily: _fontFamily);
}
