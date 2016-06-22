const React = require('react')
const ReactDOM = require('react-dom')
const DraftJsBlockEditor = require('react-draft-js-block-editor')

const Editor = DraftJsBlockEditor.Editor

const data = {
  'entityMap': {
    '0': {
      'type': 'LINK',
      'mutability': 'MUTABLE',
      'data': {
        'url': 'https://github.com/rubybrowncoat/react-draft-js-block-editor',
      },
    },
    '1': {
      'type': 'LINK',
      'mutability': 'MUTABLE',
      'data': {
        'url': 'https://facebook.github.io/draft-js/',
      },
    },
    '2': {
      'type': 'IMAGE',
      'mutability': 'IMMUTABLE',
      'data': {
        'src': 'http://cdn.osxdaily.com/wp-content/uploads/2013/07/dancing-banana.gif',
      },
    },
    '3': {
      'type': 'LINK',
      'mutability': 'MUTABLE',
      'data': {
        'url': 'http://cdn.osxdaily.com/wp-content/uploads/2013/07/dancing-banana.gif',
      },
    },
  },
  'blocks': [
    {
      'key': '2vr7c',
      'text': 'react-draft-js-block-editor',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [
        {
          'offset': 0,
          'length': 27,
          'key': 0,
        },
      ],
    },
    {
      'key': '99fam',
      'text': 'A facebook notes like rich text editor built using draft-js, with an additional support for relevant keyboard shortcuts.',
      'type': 'blockquote',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [
        {
          'offset': 51,
          'length': 8,
          'key': 1,
        },
      ],
    },
    {
      'key': '967qt',
      'text': 'The keyboard shortcuts are mentioned below.',
      'type': 'blockquote',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'bah83',
      'text': 'It also has implementations of some custom blocks like',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'euloj',
      'text': 'Custom Blocks',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'cavj0',
      'text': 'This is a blockquote.',
      'type': 'blockquote',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '7ajf3',
      'text': 'This is a block-quote-caption block (caption for a blockquote)',
      'type': 'block-quote-caption',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 10,
          'length': 19,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': 'eq01v',
      'text': 'This is an unstyled block.',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '4jprg',
      'text': 'This is a caption block. It is an opinionated block that can be added after special atomic blocks (image, video, embed, other blocks) to be used as their captions.',
      'type': 'caption',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 10,
          'length': 7,
          'style': 'BOLD',
        },
        {
          'offset': 214,
          'length': 8,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '2pig1',
      'text': ' ',
      'type': 'atomic',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [
        {
          'offset': 0,
          'length': 1,
          'key': 2,
        },
      ],
    },
    {
      'key': '7jnpl',
      'text': 'This is the image caption.',
      'type': 'caption',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [
        {
          'offset': 12,
          'length': 5,
          'key': 3,
        },
      ],
    },
    {
      'key': '7qp46',
      'text': 'Keyboard shortcuts',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'c7bqc',
      'text': 'Following are the keyboard shortcuts to toggle block types (Alt and CTRL for Windows/Linux and Option and Command for OSX.',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 60,
          'length': 3,
          'style': 'CODE',
        },
        {
          'offset': 68,
          'length': 4,
          'style': 'CODE',
        },
        {
          'offset': 95,
          'length': 6,
          'style': 'CODE',
        },
        {
          'offset': 106,
          'length': 7,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '69emd',
      'text': 'Alt/Option +',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 10,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '7ah5d',
      'text': '1 - Toggle ordered-list-item.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
        {
          'offset': 11,
          'length': 17,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '226et',
      'text': '* - Toggle unordered-list-item.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
        {
          'offset': 11,
          'length': 19,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': 'fdr9n',
      'text': '@ - Add link to selected text.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '5dd2l',
      'text': '# - Toggle header-three.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
        {
          'offset': 11,
          'length': 12,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '1inva',
      'text': '< - Toggle caption block.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
        {
          'offset': 11,
          'length': 7,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': 'dladv',
      'text': '> - Toggle unstyled block.',
      'type': 'unordered-list-item',
      'depth': 1,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 1,
          'style': 'CODE',
        },
        {
          'offset': 11,
          'length': 8,
          'style': 'BOLD',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '8abs3',
      'text': '',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '4g4k0',
      'text': 'Editor level commands',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'e1hm5',
      'text': 'Command/CTRL + S - Save current data to localstorage.',
      'type': 'ordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 16,
          'style': 'CODE',
        },
        {
          'offset': 40,
          'length': 12,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '89n8b',
      'text': 'Alt + Shift + D - Load previously saved data from localstorage.',
      'type': 'ordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 15,
          'style': 'CODE',
        },
        {
          'offset': 50,
          'length': 12,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '9vrn2',
      'text': 'Special characters while typing: If while typing in an empty block, if the content matches one of the following, that particular block type will be changed to the corresponding block specified below -',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '7ihrd',
      'text': '-- (2 hyphens) - If current block is blockquote, it will be changed to block-quote-caption, else caption.',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 2,
          'style': 'CODE',
        },
        {
          'offset': 3,
          'length': 11,
          'style': 'CODE',
        },
        {
          'offset': 37,
          'length': 10,
          'style': 'CODE',
        },
        {
          'offset': 71,
          'length': 19,
          'style': 'CODE',
        },
        {
          'offset': 97,
          'length': 7,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '11m2k',
      'text': '*. (An asterisk and a period) - unordered-list-item',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 2,
          'style': 'CODE',
        },
        {
          'offset': 3,
          'length': 26,
          'style': 'CODE',
        },
        {
          'offset': 32,
          'length': 19,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '38m5p',
      'text': '1. (1 and a period) - ordered-list-item.',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 2,
          'style': 'CODE',
        },
        {
          'offset': 3,
          'length': 16,
          'style': 'CODE',
        },
        {
          'offset': 22,
          'length': 17,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '36jrv',
      'text': '## - header-three',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 2,
          'style': 'CODE',
        },
        {
          'offset': 5,
          'length': 12,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': 'a17fn',
      'text': '== - unstyled',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 0,
          'length': 2,
          'style': 'CODE',
        },
        {
          'offset': 5,
          'length': 8,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '3451t',
      'text': '',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '1klv5',
      'text': 'Todos',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'bobur',
      'text': 'The + button that appears on the left is just a placeholder to demonstrate how it can be added besides current block. The functionality to add special blocks like image, video or others will be added eventually.',
      'type': 'unordered-list-item',
      'depth': 0,
      'inlineStyleRanges': [
        {
          'offset': 4,
          'length': 1,
          'style': 'CODE',
        },
      ],
      'entityRanges': [],
    },
    {
      'key': '7ku0',
      'text': '',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': '45mgl',
      'text': 'Issue',
      'type': 'header-three',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
    {
      'key': 'f3gea',
      'text': 'Currently, the toolbar that appears when text is selected needs to be fixed regrading its position in the viewport (vertically, especially).',
      'type': 'blockquote',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': [],
    },
  ],
}

const styles = {
  panel: {
    position: 'fixed',
    top: '10px',
    right: '10px',
  },
}

const App = React.createClass({
  render() {
    return (
      <div>
        <Editor ref={(c) => { this.editor = c }} value={data} />
        <div style={styles.panel}>
          <div onClick={() => this.editor.logData()}>export</div>
          <div onClick={() => this.editor.toggleEdit()}>toggle</div>
        </div>
      </div>
		)
  },
})

ReactDOM.render(<App />, document.getElementById('app'))
