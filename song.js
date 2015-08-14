/// <reference path="../../../scripts/dsp.js" />
/// <reference path="../../../scripts/three/three.js" />
/// <reference path="graphics.js" />
/// <reference path="io.js" />
/// <reference path="song.js" />
/// <reference path="audio.js" />
/// <reference path="text.js" />
/// <reference path="util.js" />
/// <reference path="gameobj.js" />
/// <reference path="enemies.js" />
/// <reference path="effectobj.js" />
/// <reference path="myship.js" />
/// <reference path="game.js" />

//var seq = [T(120), O(5), l(4), LS(128), V(0.5), N(C({}), D, E, F, G, A, B),o(6)];
var seqData = {
  name: 'Test',
  tracks: [
    {
      name: 'part1',
      channel: 0,
      data:
      [
        ENV(0.01, 0.02, 0.5, 0.07),
        TEMPO(180), TONE(0), VOLUME(0.5), L(8), GT(-0.5),O(4),
        LOOP('i',4),
        C, C, C, C, C, C, C, C,
        LOOP_END,
        JUMP(6)
      ]
    },
    {
      name: 'part2',
      channel: 1,
      data:
        [
        ENV(0.01, 0.05, 0.6, 0.07),
        TONE(6), VOLUME(0.2), L(8), GT(-0.8),O(6),
        R(1), R(1),
        L(1), F,
        E,
        OD, L(8, true), Bb, G, L(4), Bb, OU, L(4), F, L(8), D,
        L(4, true), E, L(2), C,R(8),
        JUMP(7)
        ]
    },
    {
      name: 'part3',
      channel: 2,
      data:
        [
        ENV(0.01, 0.05, 0.6, 0.07),
        TONE(6), VOLUME(0.1), L(8), GT(-0.5), O(6),DETUNE(0.992),
        R(1), R(1),
        O(6),L(1), C,
        C,
        OD, L(8, true), G, D, L(4), G, OU, L(4), D, L(8),OD, G,
        L(4, true), OU,C, L(2),OD, G, R(8),
        JUMP(8)
        ]
    }
  ]
}

var soundEffects;
 function SoundEffects(sequencer) {
   this.soundEffects =
    [
    // Effect 0 ////////////////////////////////////
    createTracks.call(sequencer,[
    {
      channel: 8,
      oneshot:true,
      data: [VOLUME(0.5),
        ENV(0.0001, 0.01, 1.0, 0.0001),GT(-0.999),TONE(0), TEMPO(200), O(8),ST(3), C, D, E, F, G, A, B, OU, C, D, E, G, A, B,B,B,B
      ]
    },
    {
      channel: 9,
      oneshot: true,
      data: [VOLUME(0.5),
        ENV(0.0001, 0.01, 1.0, 0.0001), DETUNE(0.9), GT(-0.999), TONE(0), TEMPO(200), O(5), ST(3), C, D, E, F, G, A, B, OU, C, D, E, G, A, B,B,B,B
      ]
    }
    ]),
    // Effect 1 /////////////////////////////////////
    createTracks.call(sequencer,
      [
        {
          channel: 10,
          oneshot: true,
          data: [
           TONE(4), TEMPO(150), ST(4), GT(-0.9999), ENV(0.0001, 0.0001, 1.0, 0.0001),
           O(6), G, A, B, O(7), B, A, G, F, E, D, C, E, G, A, B, OD, B, A, G, F, E, D, C, OD, B, A, G, F, E, D, C
          ]
        }
      ]),
    // Effect 2//////////////////////////////////////
    createTracks.call(sequencer,
      [
        {
          channel: 10,
          oneshot: true,
          data: [
           TONE(0), TEMPO(150), ST(2), GT(-0.9999), ENV(0.0001, 0.0001, 1.0, 0.0001),
           O(8), C,D,E,F,G,A,B,OU,C,D,E,F,OD,G,OU,A,OD,B,OU,A,OD,G,OU,F,OD,E,OU,E
          ]
        }
      ]),
      // Effect 3 ////////////////////////////////////
      createTracks.call(sequencer,
        [
          {
            channel: 10,
            oneshot: true,
            data: [
             TONE(5), TEMPO(150), L(64), GT(-0.9999), ENV(0.0001, 0.0001, 1.0, 0.0001),
             O(6),C,OD,C,OU,C,OD,C,OU,C,OD,C,OU,C,OD
            ]
          }
        ]),
      // Effect 4 ////////////////////////////////////////
      createTracks.call(sequencer,
        [
          {
            channel: 11,
            oneshot: true,
            data: [
             TONE(8), VOLUME(2.0),TEMPO(120), L(2), GT(-0.9999), ENV(0.0001, 0.0001, 1.0, 0.25),
             O(1), C
            ]
          }
        ])
   ];
 }

