  // Recorded 1/26/2023
  let s1 = host.ActiveLayer.CreateArtisticText(6.64056299212598, 9.4948937007874, "Text");
  s1.Fill.UniformColor.CMYKAssign(0, 0, 0, 100);
  s1.Outline.SetNoOutline();
  // Recording of this command is not supported: TextUndoRedo
  // Recording of this command is not supported: TextEdit
  host.ActiveDocument.ReferencePoint = cdrCenter;
  s1.Stretch(14.4875216869078);
  s1.AlignAndDistribute(3, 3, 2, 0, false, 2);
